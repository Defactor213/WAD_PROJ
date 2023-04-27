<template>
<div id="homepage1">
    <Head/>
    <div class="container">
        <div class="row">
            <div class="col">
                <form @submit.prevent="fetchresults">
                    <div class="form-group">
                        <label for="search">Search For an Anime!!</label>
                        <input class="form-control" id="search" placeholder="Search for something..." v-model="search_query">
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <!-- SEARCH RESULTS -->
        <div class="row display-5 rounded header1" style="margin-top: 40px;" v-if="search1 != 0">
            Search Results
        </div>
    
        <div id="search_carousel" class="carousel slide" data-bs-ride="carousel" v-if="search1 != 0">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#tsearch_carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#search_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#search_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#search_carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#search_carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row">
                    <!-- cards sample, styling is being affected by card.vue -->
                    <div class="card text-white"
                    v-for="anime in search1"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                    <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in search2"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                    <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in search3"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                    <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in search4"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                    <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in search5"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                    <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
        <button class="carousel-control-prev custom_carousel_button_css" type="button" data-bs-target="#search_carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next custom_carousel_button_css" type="button" data-bs-target="#search_carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>

        <!-- SEARCH BY GENRE -->
        <div class="row display-5 rounded header1" style="margin-top: 40px;" v-if="searchbygenre1 != 0">
            Search By Genre Results
        </div>
    
        <div id="searchbygenre_carousel" class="carousel slide" data-bs-ride="carousel" v-if="searchbygenre1 != 0">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#searchbygenre_carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#searchbygenre_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#searchbygenre_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#searchbygenre_carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#searchbygenre_carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row">
                    <!-- cards sample, styling is being affected by card.vue -->
                    <div class="card text-white"
                    v-for="anime in searchbygenre1"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                    <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in searchbygenre2"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                    <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in searchbygenre3"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                        <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in searchbygenre4"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                        <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in searchbygenre5"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                        <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
        <button class="carousel-control-prev custom_carousel_button_css" type="button" data-bs-target="#searchbygenre_carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next custom_carousel_button_css" type="button" data-bs-target="#searchbygenre_carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>

        <!-- TOP 50 CAROU -->
        <div class="row display-5 rounded header1" style="margin-top: 40px;">
            Current Top 50
        </div>
    
        <div id="top50_carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#top50_carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#top50_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#top50_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#top50_carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#top50_carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row">
                    <div class="card"
                    v-for="anime in popular1"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                        <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in popular2"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                        <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in popular3"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                        <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in popular4"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                        <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in popular5"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                        <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
        <button class="carousel-control-prev custom_carousel_button_css" type="button" data-bs-target="#top50_carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next custom_carousel_button_css" type="button" data-bs-target="#top50_carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>

        <!-- Recommended carousell -->
        <div class="row display-5 rounded header1" style="margin-top: 40px;">
            Recommended For You
        </div>
    
        <div id="reco_carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#reco_carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#reco_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#reco_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#reco_carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#reco_carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row">
                    <div class="card"
                    v-for="anime in reco1"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                        <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in reco2"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                        <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in reco3"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                        <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in reco4"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                        <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="card" style="width: 40px;"
                    v-for="anime in reco5"
                    :key="anime.mal_id"
                    :anime="anime"
                    :id="anime.mal_id">
                    <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                            <img class="card-img-top" :src="anime.images.jpg.image_url">
                        </router-link>
                        <div class="card-body">
                            <router-link :to="{name:'anime_showcase', params:{ id:anime.mal_id}}">
                                <h5 class="card-title">{{anime.title}}</h5>
                                <p class="card-text">{{anime.synopsis}}</p>
                            </router-link>
                            <button class="btn btn-outline-primary m-3" @click="favSender(anime.mal_id)">Favourite</button>
                            <button class="btn btn-outline-danger" @click="wishlistSender(anime.mal_id)">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
        <button class="carousel-control-prev custom_carousel_button_css" type="button" data-bs-target="#reco_carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next custom_carousel_button_css" type="button" data-bs-target="#reco_carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
</div>
</template>

<script>
console.log("start")
import axios from "axios";
import Head from '../components/head.vue';
import {updateWishlist, updateFavs, get_user_fav_genre} from "../../firebase"
//import {getAuth} from 'firebase/auth'
console.log("head imported")
export default {
    name:"homepage",
    components:{
        Head,
    },
    data() {
        return {
            popular1: [],
            popular2: [],
            popular3: [],
            popular4: [],
            popular5: [],
            reco1: [],    
            reco2: [],
            reco3: [],
            reco4: [],
            reco5: [],
            fav_genre: "",
            search_query: "",
            search1: [],
            search2: [],
            search3: [],
            search4: [],
            search5: [],
            searchbygenre1: [],
            searchbygenre2: [],
            searchbygenre3: [],
            searchbygenre4: [],
            searchbygenre5: [],
            search_genre: "2"
        }
    },
    created:
        async function() {
            let api_endpoint = "https://api.jikan.moe/v4/top/anime"
            var popularlist = 0
            await axios.get("https://api.jikan.moe/v4/top/anime?page=2")
                    .then(response=>{
                        console.log("page 2 is running")
                        popularlist = response.data.data
                    })
                    .catch( e => {console.log(e.message)})

            await axios.get(api_endpoint)
                .then(response => {
                    let counter = 0
                    popularlist = popularlist.concat(response.data.data)
                    console.log(popularlist)
                    for ( let anime of popularlist ) {
                        //console.log(response)
                        // console.log(anime.image_url)
                        if ( 0<= counter && counter <= 9 ) {
                            this.popular1.push(anime)
                        }
                        else if ( 10<= counter && counter <= 19 ) {
                            this.popular2.push(anime)
                        }
                        else if ( 20<= counter && counter <= 29 ) {
                            this.popular3.push(anime)
                        }
                        else if ( 30<= counter && counter <= 39 ) {
                            this.popular4.push(anime)
                        }
                        else if ( 40<= counter && counter <= 49 ) {
                            this.popular5.push(anime)
                        }
                        counter ++
                        // console.log(counter)
                    }
                
            })
            .catch(error => {
                console.log(error.message)
            })
            // console.log("start u fucker")
        },
        async beforeMount(){
            const acc = get_user_fav_genre(localStorage.getItem('myPage.expectSignIn')).then( (response) =>
                this.fav_genre = response
            )
            await acc
            let api_reco = "https://api.jikan.moe/v4/anime?genres=" + this.fav_genre + "?min_score=50"
            console.log("THIS IS MY FAV GENRE "+ this.fav_genre)
            axios.get(api_reco)
            .then(response => {
                let counter2 = 0
                let recolist = response.data.data
                console.log(recolist)
                for ( let anime of recolist ) {
                    //console.log(anime)
                    // console.log(anime.image_url)
                    if ( 0<= counter2 && counter2 <= 9 ) {
                        this.reco1.push(anime)
                    }
                    else if ( 10<= counter2 && counter2 <= 19 ) {
                        this.reco2.push(anime)
                    }
                    else if ( 20<= counter2 && counter2 <= 29 ) {
                        this.reco3.push(anime)
                    }
                    else if ( 30<= counter2 && counter2 <= 39 ) {
                        this.reco4.push(anime)
                    }
                    else if ( 40<= counter2 && counter2 <= 49 ) {
                        this.reco5.push(anime)
                    }
                    counter2 ++
                    // console.log(counter)
                }
            })
            .catch(error => {
                console.log(error.message)
            })
        },

        methods:{
            async fetchresults() {
                this.search1 = []
                this.search2 = []
                this.search3 = []
                this.search4 = []
                this.search5 = []
                let api_search = `https://api.jikan.moe/v4/anime?q=`
                api_search += this.search_query
                console.log(api_search)
                await axios.get(api_search)
                .then((response) => {
                    let counter3 = 0
                    let searchresults = response.data.data
                    for ( let anime of searchresults ) {
                    // console.log(anime)
                    // console.log(anime.image_url)
                    if ( 0<= counter3 && counter3 <= 9 ) {
                        this.search1.push(anime)
                    }
                    else if ( 10<= counter3 && counter3 <= 19 ) {
                        this.search2.push(anime)
                    }
                    else if ( 20<= counter3 && counter3 <= 29 ) {
                        this.search3.push(anime)
                    }
                    else if ( 30<= counter3 && counter3 <= 39 ) {
                        this.search4.push(anime)
                    }
                    else if ( 40<= counter3 && counter3 <= 49 ) {
                        this.search5.push(anime)
                    }
                    counter3 ++
                    this.api_search = `https://api.jikan.moe/v4/anime?q=`
                    this.search_query = ""
                    }
                })
                .catch((error) => 
                    console.log(error.message))
            },
            // async fetchbygenre() {
            //     console.log("start")
            //     this.searchbygenre1 = []
            //     this.searchbygenre2 = []
            //     this.searchbygenre3 = []
            //     this.searchbygenre4 = []
            //     this.searchbygenre5 = []
            //     let api_genre = "https://api.jikan.moe/v4/genre/anime/" + this.search_genre + "/1"
            //     await axios.get(api_genre)
            //     .then((response) => {
            //         let counter4 = 0
            //         let genreresults = response.data.results
            //         for ( let anime of genreresults ) {
            //         // console.log(anime)
            //         // console.log(anime.image_url)
            //         if ( 0<= counter4 && counter4 <= 9 ) {
            //             this.searchbygenre1.push(anime)
            //         }
            //         else if ( 10<= counter4 && counter4 <= 19 ) {
            //             this.searchbygenre2.push(anime)
            //         }
            //         else if ( 20<= counter4 && counter4 <= 29 ) {
            //             this.searchbygenre3.push(anime)
            //         }
            //         else if ( 30<= counter4 && counter4 <= 39 ) {
            //             this.searchbygenre4.push(anime)
            //         }
            //         else if ( 40<= counter4 && counter4 <= 49 ) {
            //             this.searchbygenre5.push(anime)
            //         }
            //         counter4 ++
            //         this.api_genre = "https://api.jikan.moe/v4/genre/anime/"
            //         this.search_genre = ""
            //         console.log(this.searchbygenre1)
            //         }
            //     })
            //     .catch((error) =>
            //         console.log(error.messgage))
            // }
        async axios_fav_wish_data(id){
            let mal_id = id.toString()
            let api_endpoint = `https://api.jikan.moe/v4/anime/` + mal_id
            let list_genres = []
            await axios.get(api_endpoint)
            .then(response => {
                let dict_genres = response.data.genres
                for ( let genre of dict_genres ) {
                    list_genres.push( genre.name )
                }
                list_genres = list_genres.toString()
            })
            
            .catch(error => {
                console.log(error.message)
            })
            return list_genres           
        },
        
        async wishlistSender(id){
            try {
            const user = localStorage.getItem('myPage.expectSignIn')
            let res = await this.axios_fav_wish_data(id)
            let list_genres = res
            await updateWishlist(user,id,list_genres)
            console.log("wishlist-sent")
            }
            catch(e){
                alert(e)
            }
        },

        async favSender(id){
            try {
            const user = localStorage.getItem('myPage.expectSignIn')
            let res = await this.axios_fav_wish_data(id)
            let list_genres = res
            await updateFavs(user,id,list_genres)
            }
            catch(e){
                alert(e)
            }
        }
    }
}
</script>

<style scoped>
    /* .card {
        flex: 1 1 33%;
        width: 20%;
        max-width: 20%;
        padding: 0px 8px;
        margin-bottom: 16px;
        background: grey;
    }
    .card img {
            width: 100%;
            height: 100%;
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
    } */
    a{
        color:white;
        text-decoration: none;
    }
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* number of lines to show */
                line-clamp: 5; 
        -webkit-box-orient: vertical;
    }
    #homepage1 .card {
        background-color: rgba(0, 0, 0, 0.6);
    }
    #homepage1 .header1{
        background-color: rgba(0, 0, 0, 0.6);
    }
    .custom_carousel_button_css{
        color:black;
        max-height: 10%;
        width:10%;
        margin:auto;
    }
</style>