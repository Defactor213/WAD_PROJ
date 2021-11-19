<template>
	<div class="app">
		<router-view/>
	</div>	
</template>

<script>
//import { getAuth, signOut } from "firebase/auth";
//import {getUserEmail} from '../firebase'

export default {
	data(){
		return{
			user_email: ''
		}
	},
}
</script>

<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
}

/* #nav a {
	font-weight: bold;
	color: #e6148e;
	margin: 10px;
} */

</style>

