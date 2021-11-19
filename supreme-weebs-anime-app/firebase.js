import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onMounted, onUnmounted, ref, computed } from 'vue'
//eslint-disable-next-line no-unused-vars
import {
    getFirestore,doc,updateDoc,arrayUnion,setDoc,getDoc
} from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrQfGYnnGa1IpwCehvYNY5Y20NuDpZWtA",
    authDomain: "supreme-weebs-tester-db.firebaseapp.com",
    projectId: "supreme-weebs-tester-db",
    storageBucket: "supreme-weebs-tester-db.appspot.com",
    messagingSenderId: "799644370531",
    appId: "1:799644370531:web:f7e371593934b13922da56",
    measurementId: "G-VLK4DNYDS3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useAuthState = () => {
    const user = ref(null)
    const error = ref(null)

    const auth = getAuth()
    let unsuscribe
    onMounted(() => {
        unsuscribe = onAuthStateChanged(
            auth,
            u => (user.value = u),
            e => (error.value = e)
        )
    })
    onUnmounted(() => unsuscribe())
    const isAuthenticated = computed(() => user.value != null)
    return {
        user,error,isAuthenticated
    }
}

export const getUserEmail = (auth) => {
    const user = auth.currentUser;
    if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
        return user.email
    }
    return user
}

export async function getUserState(){
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        return true
    } else {
        return false
    }
}

export async function RegisterUser(user_name,my_fav_genre){
    var ref = doc(db,"users",user_name)
    try{
        await setDoc(ref,{
            email: user_name,
            favourites: [],
            friends : [],
            wishlist: [],
            fav_genre: my_fav_genre,
            name : user_name.substring(0,user_name.indexOf('@'))
        })
        console.log("success")
    }
    catch(e){
        alert("error adding document: "+e)
    }
}

export async function get_user_fav_genre(user_name){
    try {
        let ref = doc(db,"users",user_name)
        let fav_genre = []
        const docsnap = await getDoc(ref)
        if (docsnap.exists()){
            fav_genre = docsnap.data().fav_genre
        }
        console.log(fav_genre)
        return fav_genre
    }
        catch (e) {
        console.error("Error finding fav: ", e);
    }
}

export async function updateFavs(user_name,title,genre){
    try{
        let ref = doc(db,"users",user_name)
        await updateDoc(ref,{
            favourites: arrayUnion({
                name_anime: title,
                genre_anime: genre
            }),
        })
        alert("updated successfully")
        } catch(e){
            alert("Error adding document: " + e)
        }
    }

export async function updateWishlist(user_name,title,genre){
    try{
        let ref = doc(db,"users",user_name)
        await updateDoc(ref,{
            wishlist: arrayUnion({
                name_anime: title,
                genre_anime: genre
            }),
        })
        alert("updated successfully")
        } catch(e){
            alert("Error adding document: " + e)
        }
    }




// updates fields in a document
export async function UpdateFieldsInADocument(user_name,anime_id){
    try{
    let ref = doc(db,"users",user_name)
    await updateDoc(ref,{
        favourites: arrayUnion(anime_id),
    })
    alert("updated successfully")
    } catch(e){
        alert("Error adding document: " + e)
    }
}

export async function getFriends(user_name){
    try {
        let ref = doc(db,"users",user_name)
        let friends = []
        const docsnap = await getDoc(ref)
        if (docsnap.exists()){
            for( let i of docsnap.data().friends){
                console.log(i)
                friends.push(i)
            }
        }
        console.log(friends)
        return friends
        }
        catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function get_favs_wishlist(user_name){
    try {
        let ref = doc(db,"users",user_name)
        let favs = []
        let wishlist = []
        const docsnap = await getDoc(ref)
        if (docsnap.exists()){
            //console.log("===="+docsnap.data().wishlist)
            for( let i of docsnap.data().wishlist){
                wishlist.push(i)
            }
            for( let i of docsnap.data().favourites){
                favs.push(i)
            }
        }
        console.log(favs)
        return [favs,wishlist]
        }
        catch (e) {
        console.error("Error adding document: ", e);
    }
}
