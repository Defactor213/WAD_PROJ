<template>
    <div>
        <Head/>
    <div class="container" style="margin-top: 50px;">
        <div class="row">
            <div class="col-4">
                <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-dark list-group-item-action active" id="list-info-list" data-bs-toggle="list" href="#list-info" role="tab" aria-controls="list-info">User Info</a>
                    <a class="list-group-item list-group-item-dark list-group-item-action" id="list-Privacy-list" data-bs-toggle="list" href="#list-Privacy" role="tab" aria-controls="list-Privacy">Privacy</a>
                </div>
            </div>
            <div class="col-8">
                <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-info" role="tabpanel" aria-labelledby="list-info-list">
                    <div class="bg-dark">
                        <div class="row">
                            <img src="../assets/profile.png" style="width:150px">Username
                        <br>
                            {{user_email.substring(0,user_email.indexOf('@'))}} 
                        </div>
                        
                        <div class="row" style="margin-left:150px">
                            email 
                        <br>
                            {{user_email}}
                        </div>
                        <br>
                        <div class="row" style="margin-left:150px">
                            Password 
                        <br>
                            **********
                        </div>
                        <br>
                    </div>
                </div>
                <div class="tab-pane fade show " id="list-Privacy" role="tabpanel" aria-labelledby="list-Privacy-list">
                    <div class="bg-dark">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="privacy1">
                            <label class="form-check-label" for="privacy1">Private my account (Users wont be able to add you as friend)</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="privacy2">
                            <label class="form-check-label" for="privacy2">Only let me add friends that i know</label>
                        </div>
                </div>
            </div>
        </div>
    </div>    
</div>
</div>
</div>

</template>

<script>
import Head from '../components/head.vue';
export default {
    name:"profile",
    components:{
        Head
    },
    data(){
        return{
            user_email : localStorage.getItem('myPage.expectSignIn')
        }
        
    }

}
</script>

<style>

</style>