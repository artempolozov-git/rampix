<template>
    <div class="offers-wrapper" data-aos="fade-up"
         data-aos-anchor-placement="top-bottom">
        <div class="man-happy" v-tilt><img alt="Поступила заявка от нового клиента" src="@/assets/icons/man-sites.svg"></div>
        <div class="main-text">
            <h1 class="top-text">С помощью сайта Вы сможете увеличить продажи компании и привлечь новых клиентов!</h1>
            <h2 class="bottom-text">По статистике, более 70% потенциальных клиентов оформляют заказы и совершают покупки в интернете!</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeManOffer"
    }
</script>

<style scoped>
.offers-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
}
.man-happy {
    margin-right: 75px;
    width: 270px;
}
.main-text {
    width: 45%;
}
.top-text {
    font-size: 30px;
    font-weight: bold;
    color: #333333;
}
.bottom-text {
    margin-top: 10px;
    font-size: 21px;
    color: #686868;
    font-weight: normal;
}
@media screen and (max-width: 1024px) {
    .offers-wrapper {
        display: block;
    }
    .man-happy {
        width: 170px;
        margin: auto;
        margin-bottom: 30px;
    }
    .main-text {
        width: 60%;
        margin: auto;
        text-align: center;
    }
}
@media screen and (max-width: 800px) {
    .main-text {
        width: 80%;
    }
}
@media screen and (max-width: 600px) {
    .top-text {
        font-size: 18px;
    }
    .bottom-text {
        font-size: 14px;
    }
}
@media screen and (max-width: 360px) {
    .man-happy {
        width: 130px;
    }
    .top-text {
        font-size: 16px;
    }
    .bottom-text {
        display: none;
    }
}
</style>