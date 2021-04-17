<template>
    <div class="offers">
        <h2 class="sentence">Создадим сайт для
            <div class="slidingVertical">
                <span>любой сферы бизнеса!</span>
                <span>личного бренда!</span>
                <span>поиска клиентов!</span>
                <span>каждого!</span>
            </div>
        </h2>
    </div>
</template>

<script>
    export default {
        name: "HomeOffer"
    }
</script>

<style scoped>
    .offers {
        display: flex;
        align-items: center;
        padding: 0px 100px;
        height: 150px;
        color: white;
        font-weight: 500;
        font-size: 32px;
        overflow: hidden;
        animation:bg 5s linear infinite;
        background-color: #1c89ea;
    }
    .sentence{
        color: white;
        font-size: 30px;
    }
    /*Vertical Sliding*/
    .slidingVertical{
        display: inline;
        text-indent: 10px;
    }
    .slidingVertical span{
        animation: topToBottom 7.0s linear infinite 0s;
        -ms-animation: topToBottom 7.0s linear infinite 0s;
        -webkit-animation: topToBottom 7.0s linear infinite 0s;
        color: white;
        opacity: 0;
        overflow: hidden;
        position: absolute;
    }
    .slidingVertical span:nth-child(2){
        animation-delay: 1.5s;
        -ms-animation-delay: 1.5s;
        -webkit-animation-delay: 1.5s;
    }
    .slidingVertical span:nth-child(3){
        animation-delay: 3.0s;
        -ms-animation-delay: 3.0s;
        -webkit-animation-delay: 3.0s;
    }
    .slidingVertical span:nth-child(4){
        animation-delay: 4.5s;
        -ms-animation-delay: 4.5s;
        -webkit-animation-delay: 4.5s;
    }
    /*topToBottom Animation*/
    @-moz-keyframes topToBottom{
        0% { opacity: 0; }
        5% { opacity: 0; -moz-transform: translateY(-30px); }
        10% { opacity: 1; -moz-transform: translateY(0px); }
        25% { opacity: 1; -moz-transform: translateY(0px); }
        30% { opacity: 0; -moz-transform: translateY(30px); }
        80% { opacity: 0; }
        100% { opacity: 0; }
    }
    @-webkit-keyframes topToBottom{
        0% { opacity: 0; }
        5% { opacity: 0; -webkit-transform: translateY(-30px); }
        10% { opacity: 1; -webkit-transform: translateY(0px); }
        25% { opacity: 1; -webkit-transform: translateY(0px); }
        30% { opacity: 0; -webkit-transform: translateY(30px); }
        80% { opacity: 0; }
        100% { opacity: 0; }
    }
    @-ms-keyframes topToBottom{
        0% { opacity: 0; }
        5% { opacity: 0; -ms-transform: translateY(-30px); }
        10% { opacity: 1; -ms-transform: translateY(0px); }
        25% { opacity: 1; -ms-transform: translateY(0px); }
        30% { opacity: 0; -ms-transform: translateY(30px); }
        80% { opacity: 0; }
        100% { opacity: 0; }
    }
@media screen and (min-width: 1920px) {
    .offers {
        height: 200px;
    }
}
@media screen and (min-width: 1440px) {
    .offers {
        height: 200px;
    }
}
@media screen and (max-width: 960px) {
    .offers {
        display: none;
    }
}
</style>