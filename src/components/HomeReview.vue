<template>
    <div>
        <div style="height: 50px" id="review-block"></div>
        <div class="review-main-block">
            <div class="title-review">Отзывы наших клиентов</div>
            <div class="review-button-up" @click="toggleForm">
                <span>Оставить отзыв</span>
            </div>
            <slick ref="slick" :options="slickOptions" data-aos="fade-up"
                   data-aos-anchor-placement="top-bottom">
                <div>
                    <second-client></second-client>
                </div>
                <div>
                    <first-client></first-client>
                </div>
                <div>
                    <third-client></third-client>
                </div>
            </slick>
            <div class="review-button-down" @click="toggleForm">
                <span>Оставить отзыв</span>
            </div>
        </div>
    </div>
</template>

<script>
    import FirstClient from "@/reviews/FirstClient";
    import SecondClient from "@/reviews/SecondClient";
    import ThirdClient from "@/reviews/ThirdClient";
    import Slick from 'vue-slick';
    export default {
        name: "Review",
        components: {
            FirstClient,
            SecondClient,
            ThirdClient,
            Slick,
        },
        data() {
            return {
                slickOptions: {
                    accessibility: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true,
                    arrows: false,
                    dotsClass: "my-dots",
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    // Any other options that can be got from plugin documentation
                },
            };
        },
        methods:{
            toggleForm(){
                var form = document.getElementById("feedback-reviews");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
    }
</script>

<style src='../../node_modules/slick-carousel/slick/slick.css'></style>
<style src='../../node_modules/slick-carousel/slick/slick-theme.css'></style>
<style>
    .slick-prev:before, .slick-next:before {

    }
    .slick-slider > div {
        height: 100%;
    }
    .slick-dotted.slick-slider {
        height: 100%;
        margin-bottom: 0;
    }
    .my-dots {
        position: absolute;
        bottom: 0;
        margin: 0;
        top: 350px;
        display: block;
        width: 100%;
        padding: 0;
        list-style: none;
        text-align: center;
    }
    .my-dots li {
        position: relative;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 0 10px;
        padding: 0;
        cursor: pointer;
    }
    .my-dots li button {
        font-size: 0;
        display: block;
        width: 20px;
        height: 5px;
        padding: 0px;
        cursor: pointer;
        border: 0;
        outline: none;
        background: rgba(104, 104, 104, 0.3);
    }
    .my-dots li.slick-active button {
        background: #1c89ea;
    }

.review-main-block {
    padding: 40px 300px;
    background: url(../assets/icons/backreviews.svg);
    background-size: cover;
    background-position: bottom;
}
.title-review {
    margin-bottom: 40px;
    font-size: 23px;
    font-weight: bold;
    color: #333333;
    text-align: center;
}
.review-button-up {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-bottom: 15px;
    width: 180px;
    height: 45px;
    background-color: #1c89ea;
    border-radius: 7px;
    transition: opacity .2s ease-in;
}
.review-button-up:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease-in;
}
.review-button-up > span {
    color: white;
    font-weight: bold;
}
.review-button-down {
    display: none;
}
@media only screen and (max-width : 1920px) {
    .review-main-block {
        background-position: top;
    }
}
@media only screen and (max-width : 1536px) {
    .review-main-block {
        padding: 40px 200px;
    }
}
@media only screen and (max-width : 1366px) {
    .review-main-block {
        padding: 40px 100px;
    }
}
@media screen and (max-width: 1024px) {
    .review-clients {
        display: block;
    }
    .review-button-up {
        display: none;
    }
    .review-button-down {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 180px;
        height: 45px;
        background-color: #1c89ea;
        border-radius: 7px;
        transition: opacity .2s ease-in;
    }
    .review-button-down:hover {
        cursor: pointer;
        opacity: 0.8;
        transition: opacity .2s ease-in;
    }
    .review-button-down > span {
        color: white;
        font-weight: bold;
    }
    .review-main-block {
        padding: 40px 100px 0;
        background-position: unset;
    }
}
@media screen and (max-width: 1024px) {
    .my-dots {
        top: 370px;
    }
    .review-button-down {
        margin-top: 30px;
    }
}
@media screen and (max-width: 960px) {
    .review-main-block {
        padding: 40px 50px 0;
    }
}
@media screen and (max-width: 800px) {
    .my-dots {
        top: 400px;
    }
}
@media screen and (max-width: 650px) {
    .review-main-block {
        padding: 40px 30px 0;
    }
    .title-review {
        font-size: 18px;
    }
    .review-button-down {
        width: 150px;
        font-size: 14px;
    }
    .my-dots {
        top: 420px;
    }
}
@media screen and (max-width: 520px) {
    .my-dots {
        top: 470px;
    }
}
@media screen and (max-width: 445px) {
    .my-dots {
        top: 530px;
    }
}
@media screen and (max-width: 400px) {
    .title-review {
        font-size: 16px;
    }
    .review-button-down {
        margin-top: 10px;
    }
    .my-dots {
       display: none;
    }
}
</style>