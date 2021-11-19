<template>
    <div class="bg-dark text-light section-header" style="margin-bottom:50px;">
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
            <div class="container-fluid">
                <a class="navbar-brand display-1" href="homepage"> 
                    <img src="../assets/logo.jpg" style="width:30px">
                    Anime Иation
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end">
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

<style>
.section-header{
    padding-bottom:0px;
    position: sticky;
    top: 0;
}
</style>