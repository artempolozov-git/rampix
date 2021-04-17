<template>
    <div class="offers-wrapper" data-aos="fade-up"
         data-aos-anchor-placement="top-bottom">
        <div class="main-text">
            <h1 class="top-text">Подключив инструменты веб-аналитики Вы сможете собрать и проанализировать информацию о посетителях сайта!</h1>
            <h2 class="bottom-text">Имея данные, вы сможете выявить слабые места сайта, узнать аудиторию и ее потребности, определить задачи и составить план для повышения эффективности работы!</h2>
        </div>
        <div class="graphics" v-tilt><img alt="Рост аналитики сайта" src="@/assets/icons/man-statistics.svg"></div>
    </div>
</template>

<script>
    export default {
        name: "HomeAnalyticsOffer"
    }
</script>

<style scoped>
    .offers-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px 0px;
    }
    .graphics {
        width: 300px;
    }
    .main-text {
        margin-right: 55px;
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
            margin-top: 50px;
            padding: 0px 0px 50px;
        }
        .graphics {
            width: 170px;
            margin: auto;
        }
        .main-text {
            width: 60%;
            margin: auto;
            text-align: center;
        }
        .bottom-text {
            margin-bottom: 45px;
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
        .graphics {
            width: 130px;
        }
        .top-text {
            font-size: 16px;
            margin-bottom: 30px;
        }
        .bottom-text {
            display: none;
        }
    }
</style>