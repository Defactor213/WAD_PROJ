<template>
    <div class="bg-dark text-light section-header" style="margin-bottom:50px;">
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
            <div class="container-fluid">
                <router-link :to="{name:'homepage'}">
                <a class="navbar-brand display-1"> 
                    <img src="../assets/logo.jpg" style="width:30px">
                    Anime Иation
                </a>
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end">
                <form class="d-flex ">
                    <li class="nav-item">
                        <a class="nav-link active" href="friends" style="margin-right:10px">My Friends</a>
                    </li>
                    <div class="dropdown">
                        <button class="btn btn-outline-primary outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Weeblet<img src="../assets/profile.png" style="width:40px">
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <router-link :to="{name:'profile'}">
                                <li><a class="dropdown-item">My Profile</a></li>
                            </router-link>
                            <li><a class="dropdown-item" @click='SignOut()'>Log Out</a></li>
                        </ul>
                    </div>
                </form>
                </ul>
            </div>
            </div>
        </nav>
    </div>
</template>


<script>
import {signOut, getAuth} from 'firebase/auth'
export default {
    name:"Head",
    methods:{
        async SignOut(){
			const auth = getAuth();
			signOut(auth).then(() => {
				localStorage.removeItem('myPage.expectSignIn')
				this.$router.push('./login')
				}).catch((e) => {
					alert(e.message)
				});
		}
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
.section-header{
    padding-bottom:0px;
    position: sticky;
    top: 0;
}
</style>