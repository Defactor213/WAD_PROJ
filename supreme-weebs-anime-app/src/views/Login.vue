<template>
    <div id='login'>
        <Head/>
    <div class="container" style="margin-top: 100px;">
    <div class="row">
        <div class="col-8 justify-content-center text-align-center text-center">
            <p class="display-1" style="font-size: 100px;">
            Anime 
            <br>
            Nation
            </p>
            <p class="justify-content-center text-align-center text-center" style="font-size: 20px;">A community for Weebs , by Weebs :)</p>
        </div>

        <div class="col-4 justify-content-center">
            <form @submit.prevent = 'handleSubmit()'>
                <div class="form-group">
                    <label for="email">Email </label>
                    <input v-model='username' type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email">
                </div>
                <div class="form-group" style="margin-top: 10px;">
                    <label for="password">Password</label>
                    <input v-model='password' type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div>
                    <button type="submit" class="btn btn-primary justify-content-center align-center" style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 80%;
                    margin:auto;
                    margin-top: 20px;">
                    Login
                    </button>
                </div>
            </form>
            <div>
                <hr>
                Don't have a account? 
                <div>
                    <router-link :to="{ name: 'register'}">
                    <button type="submit" class="btn btn-secondary justify-content-center align-center" style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 80%;
                    margin:auto;
                    margin-top:20px">
                    Register
                    </button></router-link>
                </div>
            </div>
        </div>
    </div>   
</div>
<hr>
</div>
    <br>
    <br>    
    <br>
<div class="display-1 text-center">
    Features
    <br>
    <br>
    <br>



</div>
<div class="display-6">
    <div class="parallax" id="trans1">
        <div class="txt right">
            Gather all of your favorite shows in one place
        </div>
    </div>
    
    <div class="parallax" id="trans2">
        <div class="txt left">
            Find friends with similar interests
        </div>
    </div>

    <div class="parallax" id="trans3">
        <div class="txt right align-center justify-content-center" style="margin-top:300px;">
            Get recommendations for shows to watch!
        </div>
    </div>
</div>

<div class="parallax"></div>

</template>

<script>
import Head from '../components/header_wo_stuff.vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    name:"register",
    components:{
        Head
    },
    data(){
        return{
            username: "",
            password: ""
        }
    },
    methods:{
        async handleSubmit(){
            let username = this.username
            let password = this.password
            const auth = getAuth()
            signInWithEmailAndPassword(auth,username,password).then(()=>{
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
    .parallax {
    position:relative;
    z-index:1;
    height:450px;
    -webkit-box-shadow: inset 0px -6px 5px rgba(50, 50, 50, 0.75);
    -moz-box-shadow: inset 0px -6px 5px rgba(50, 50, 50, 0.75);
    box-shadow: inset 0px -6px 5px rgba(50, 50, 50, 0.75);
    }

    #trans1 {
    background: url('../assets/show3.png') no-repeat fixed;
    height:575px;
    background-position: center top;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    }

    #trans2 {
    background: url('../assets/show1.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    }

    #trans3 {
    background: url('../assets/show11.jpg') no-repeat top center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height:550px;
    }

    .txt {
    color:#000;
    width:auto;
    background:#000;
    background:rgba(0,0,0,0.60);
    color:#ccc;
    padding:5px 10px;
    }

    .txt.right {
    margin: 150px 100px 0 0;
    float:right;
    text-align:right;
    }

    .txt.left {
    float:left;
    text-align:left;
    margin: 150px 0 0 100px;
    }
    .txt.center {
    float:left;
    text-align:center;
    margin: 100px 0 0 100px;
    }

    .content {
    box-sizing:border-box;-moz-box-sizing:border-box;
    position:relative;
    z-index:2;
    background:#FFF;
    width:100%;

    margin:0;
    padding:10px 20px;
    -webkit-box-shadow: 0px 6px 5px rgba(50, 50, 50, 0.75);
    -moz-box-shadow: 0px 6px 5px rgba(50, 50, 50, 0.75);
    box-shadow: 0px 6px 5px rgba(50, 50, 50, 0.75);
    text-align:left;
    }

    .content.right {
    text-align:right;
    }

    .content h2 { padding:0 25px; }
    .content p { padding:0 50px; }
</style>

