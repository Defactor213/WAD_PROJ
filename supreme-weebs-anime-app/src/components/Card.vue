<template>
	<div class="card">
        <router-link :to="{name:'anime_showcase', params:{ id:id}}">
            <a :href="anime.url" target="_blank">
                <img 
                    :src="anime.image_url" 
                    :alt="anime.title + ' Poster'" 
                />
                <h3>{{ anime.title }}</h3>
                <h3>{{ id }}</h3>
            </a>
            <button class="btn btn-outline-primary" @click="Id_Sender()">Favourite</button>

            
                <button class="btn btn-outline-success">View Anime</button>
        </router-link>
		<!-- <a href="#" target="_blank">
			<img src="https://placehold.it/150x250" alt="Anime Poster Image"/>
			<h3>naruto</h3>
		</a> -->
	</div>
</template>

<script>

import { UpdateFieldsInADocument } from '/firebase'
export default {
	props: ['anime','id'],
    methods: {
        async Id_Sender(){
            await UpdateFieldsInADocument("Shubhash",this.id)
        }
    }
}
</script>

<style>
    .card {
        flex: 1 1 33%;
        width: 20%;
        max-width: 20%;
        padding: 0px 8px;
        margin-bottom: 16px;
        background: grey;
    }

    .card img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 16px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
            transition: 0.4s;
        }

    .card h3 {
            padding: 16px;
            color: #313131;
            transition: .4s;
        }

    .card:hover img {
        transform: scale(1.05);
    }

    .card:hover h3 {
        color: #24c444;
    }
</style>