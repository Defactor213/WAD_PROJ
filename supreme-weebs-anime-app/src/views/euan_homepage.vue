<template>
    <div id="euan_homepage">
        <Head/>
        <header>
			<h1>SupremeWeebs<strong>Anime</strong>Database</h1>
            <form class="search-box" @submit.prevent="fetchApi">
                <input 
                    type="search" 
                    class="search-field" 
                    placeholder="Search for an anime..."
                    v-model="search_query"
                    required/>
            </form>
        </header>
        <main>
			<div v-if="animelist.length != 0" class="cards">
				<Card 
					v-for="anime in animelist" 
					:key="anime.mal_id"
					:anime="anime"
					:id="anime.mal_id"
					@click="get_key"/>
			</div>

			<br><br>
			<h1>POPULAR ANIME</h1>

			<div class="cards">
				<Card 
					v-for="popularanime in popularlist" 
					:key="popularanime.mal_id"
					:anime="popularanime"
					:id="popularanime.mal_id"/>
			</div>

			<div v-if="animelist.length==0 && popularlist.lebgth == 0 " class="no-results">
				<h3>Sorry, we have no results...</h3>
			</div>
        </main>
    </div>
</template>

<script>
// import { ref } from 'vue';
import axios from "axios";
import Card from '../components/Card';
import Head from '../components/head.vue';
export default {
	// setup() {
	// 	const search_query = ref("");
	// 	const animelist = ref([]);
	// 	const HandleSearch = async () => {
	// 		animelist.value = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search_query.value}`)
	// 			.then(res => res.json())
	// 			.then(data => data.results);
	// 		search_query.value = "";
	// 	}
	// 	return {
	// 		Card,
	// 		search_query,
	// 		animelist,
	// 		HandleSearch
	// 	}
	// }
	name: "euan_homepage",
	components: {
        Card,
        Head
	},
	data(){
	return{
		search_query: "",
		animelist: [],
		API_URL: `https://api.jikan.moe/v3/search/anime?q=`,
		popularity_URL: `https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1`,
		popularlist:[],
		}
	},

	created: 
		function() {
		let api_endpoint = "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1"
		axios.get(api_endpoint)
		.then(response=> {
			console.log( response.data.results )
			this.popularlist = response.data.results
		})
		.catch(error => {
			console.log(error.message)
		})
	},
//   computed:{
// 	get_popularity() {
// 		axios.get(this.popularity_URL)
// 		.then((response)=>{
// 			console.log(response.data.results)
// 			this.popularlist = response.data.results
// 			return this.popularlist
// 		})
// 		.catch((error)=>
// 		  	console.log(error))
// 	  }
//   },
  methods:{
	async fetchApi(){
		this.API_URL += this.search_query
		console.log("NEW API IS=> "+this.API_URL)
		await axios.get(this.API_URL)
		.then((response)=>{
			console.log(response.data.results)
			this.animelist = response.data.results
			this.API_URL = `https://api.jikan.moe/v3/search/anime?q=`
			this.search_query = ''
		})
		.catch((error)=>
			console.log(error))
		}
	
	},
}
</script>

<style>
	#euan_homepage {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		/* font-family: 'Fira Sans', sans-serif; */
	}
	#euan_homepage a {
		text-decoration: none;
	}
	#euan_homepage header {
		padding-top: 50px;
		padding-bottom: 50px;
	}

	#euan_homepage header h1 {
			color: #888;
			font-size: 42px;
			font-weight: 400;
			text-align: center;
			text-transform: uppercase;
			margin-bottom: 30px;
	}

	#euan_homepage header h1 strong {
		color: #313131;
	}

	#euan_homepage header h1:hover {
				color: #ee0a0a;
				transition: 0.5s;
	}

	#euan_homepage header .search-box {
			display: flex;
			justify-content: center;
			padding-left: 30px;
			padding-right: 30px;
	}

	#euan_homepage header .search-field {
				appearance: none;
				background: none;
				border: none;
				outline: none;
				background-color: #F3F3F3;
				box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
				display: block;
				width: 100%;
				max-width: 600px;
				padding: 15px;
				border-radius: 8px;
				color: #313131;
				font-size: 20px;
				transition: 0.4s;
	}

	#euan_homepage header .search-field:focus {
	color: #FFF;
		background-color: #313131;
		box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
	}

	#euan_homepage header .search-field:active {
		color: #FFF;
		background-color: #313131;
		box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
	}

	#euan_homepage main {
		max-width: 1200px;
		margin: 0 auto;
		padding-left: 30px;
		padding-right: 30px;
		
	}

	#euan_homepage main .cards {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -8px;
	}
</style>