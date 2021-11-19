<template>
    <div>
        <Head/>
        <!-- <Background/> -->
        <div class="container" style="margin-top: 100px;">
            <div class="row">
                <div class="col-8 justify-content-center text-align-center text-center">
                    <p class="display-1" style="font-size: 100px;">
                        Anime 
                    <br>
                    Nation
                    </p>
                    <p class="justify-content-center text-align-center text-center" style="font-size: 20px;">A community for Weebs,by Weebs :)</p>
                </div>

                <div class="col-4 justify-content-center">
                    <form @submit.prevent = 'handleSubmit()'>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input v-model="username" type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email, username is <name>@<email>.com">
                        </div>

                        <div class="form-group" style="margin-top: 10px;">
                            <label for="password">Password</label>
                            <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
                        </div>
                        <div>
                            <select 
                                class="form-select bg-secondary justify-content-center align-center text-white" 
                                aria-label="Default select example" v-model="category"
                                style="display: flex; justify-content: center; align-items: center;width: 80%;margin:auto;margin-top: 20px;"> 
                            <option selected>Favorite Category?</option>
                            <option value="1">Action</option>
                            <option value="2">Adventure</option>
                            <option value="4">Comedy</option>
                            <option value="8">Drama</option>
                            <option value="36">Slice of Life</option>
                            <option value="10">Fantasy</option>
                            <option value="14">Horror</option>
                            <option value="37">Supernatural</option>
                            <option value="7">Mystery</option>
                            <option value="40">Psychological</option>
                            <option value="22">Romance</option>
                            <option value="24">Sci-Fi</option>
                            </select>
                        </div>

                        <div>
                            <button type="submit" class="btn btn-primary justify-content-center align-center" style="
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 80%;
                            margin:auto;
                            margin-top: 20px;">
                            Register Now!
                            </button>
                        </div>
                    </form>
                </div>
            </div>   
        </div>
    <hr>
</div>
</template>

<script>
import Head from '../components/header_wo_stuff.vue';
//import Background from '../components/background.vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {RegisterUser} from '../../firebase'
export default {
    name:"register",
    components:{
        Head,
        // Background,
    },
    data(){
        return {
            username : "",
            password : "",
            category : "Favorite Category?",
        }
    },
    methods:{
        async handleSubmit(){
            let username = this.username
            let password = this.password
            const auth = getAuth()
            createUserWithEmailAndPassword(auth,username,password).then(() =>{
                RegisterUser(username,this.category)
                localStorage.setItem('myPage.expectSignIn', username)
                this.$router.push("/homepage")
            }) 
            .catch(e => {
                alert(e.message)
            })

        }
        
    }

}
</script>

<style>

</style>