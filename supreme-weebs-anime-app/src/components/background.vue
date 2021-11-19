<template>
    <div scroll="no" id="background">
        <div class="canvas">

        <div class="flower" id="flower1">
            <div class="petal petal1 f1p"></div>
            <div class="petal petal2 f1p"></div>
            <div class="petal petal3 f1p"></div>
            <div class="petal petal4 f1p"></div>
            <div class="petal petal5 f1p"></div>
        </div>

        <div class="flower" id="flower2">
            <div class="petal petal1 f2p"></div>
            <div class="petal petal2 f2p"></div>
            <div class="petal petal3 f2p"></div>
            <div class="petal petal4 f2p"></div>
            <div class="petal petal5 f2p"></div>
        </div>
        
        <div class="flower" id="flower3">
            <div class="petal petal1 f3p"></div>
            <div class="petal petal2 f3p"></div>
            <div class="petal petal3 f3p"></div>
            <div class="petal petal4 f3p"></div>
            <div class="petal petal5 f3p"></div>
        </div>

        <div class="flower" id="flower4">
            <div class="petal petal1 f4p"></div>
            <div class="petal petal2 f4p"></div>
            <div class="petal petal3 f4p"></div>
            <div class="petal petal4 f4p"></div>
            <div class="petal petal5 f4p"></div>
        </div>

        <div class="flower" id="flower5">
            <div class="petal petal1 f5p"></div>
            <div class="petal petal2 f5p"></div>
            <div class="petal petal3 f5p"></div>
            <div class="petal petal4 f5p"></div>
            <div class="petal petal5 f5p"></div>
        </div>

        <div class="flower" id="flower6">
            <div class="petal petal1 f6p"></div>
            <div class="petal petal2 f6p"></div>
            <div class="petal petal3 f6p"></div>
            <div class="petal petal4 f6p"></div>
            <div class="petal petal5 f6p"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#background .canvas{
    display:inline;
}
#background .flower{
    width:15px;
    height:15px;
    border-radius:50%;
    z-index:1;
    position:absolute;
    top:-20%;
}
#background .petal{
    width:15px;
    height:15px;
    border-radius:50%;
    z-index:-1;
}
#background .petal1{
    position:relative;
    left:-70%; top:20%;
}
#background .petal2{
    position:relative;
    top:-18%; left:-5%;
}
#background .petal3{
    position:relative;
    top:-170%; left:72%;
}
#background .petal4{
    position:relative;
    top:-363%; left:-30%;
}
#background .petal5{
    position:relative;
    top:-450%; left:53%;
}

#background #flower1{
    background-color:mediumvioletred;
    position:absolute;
    left:8%;
    animation-name:rain;
    animation-duration:7s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
}
#background .f1p{
    background-color:pink;
}

#background #flower2{
    background-color:yellow;
    position:absolute;
    left:25%;
    animation-name:rain;
    animation-duration:4s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
    animation-delay:1.5s;
}
.f2p{
    background-color:indianred;
}
#background #flower3{
    background-color:mediumvioletred;
    position:absolute;
    left:42%;
    animation-name:rain;
    animation-duration:10s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
    animation-delay:0s;
}
#background .f3p{
    background-color:pink;
}
#background #flower4{
    background-color:yellow;
    position:absolute;
    left:59%;
    animation-name:rain;
    animation-duration:6s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
    animation-delay:1.5s;
}
#background .f4p{
    background-color:indianred;
}

#background #flower5{
    background-color:mediumvioletred;
    position:absolute;
    left:75%;
    animation-name:rain;
    animation-duration:10s;
    animation-iteration-count:infinite;
    animation-timing-function:ease-out;
    animation-delay:3s;
}
#background .f5p{
    background-color:pink;
}

#background #flower6{
    background-color:yellow;
    position:absolute;
    left:90%;
    animation-name:rain;
    animation-duration:7s;
    animation-iteration-count:infinite;
    animation-timing-function:ease-in;
    animation-delay:0s;
}
#background .f6p{
    background-color:indianred;
}
@keyframes rain{
    0%{transform:rotate(0deg);
        top:-10%;
    }
    100%{transform:rotate(720deg);
        top:100vh;
    }
}
</style>