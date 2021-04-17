<template>
<div>
    <div style="height: 30px" id="comparison-block"></div>
    <div class="background">
        <div class="title">Преимущества разработки собственного сайта перед конструктором</div>
        <div class="comparison" data-aos="fade-up"
             data-aos-anchor-placement="top-bottom">
            <div class="pluse">
                <div class="headline">Разработка сайта:</div>
                <div class="points">
                    <img src="@/assets/icons/plus.svg">
                    <span>Отсутствие мусора в коде</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/plus.svg">
                    <span>Индивидуальный дизайн</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/plus.svg">
                    <span>Быстрая загрузка сайта</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/plus.svg">
                    <span>Сайт полностью принадлежит Вам</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/plus.svg">
                    <span>Безграничный функционал сайта</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/plus.svg">
                    <span>Доступны все инструменты SEO</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/plus.svg">
                    <span>Расширенный маркетинговый анализ</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/plus.svg">
                    <span>Наличие обратной связи</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/plus.svg">
                    <span>Техническая поддержка 24/7</span>
                </div>
            </div>

            <div class="man-question" v-tilt><img src="@/assets/icons/manquestion.svg"></div>

            <div class="minus">
                <div class="headline">Конструкторы сайтов:</div>
                <div class="points-minus">
                    <img src="@/assets/icons/minus.svg">
                    <span>Плохой код</span>
                </div>
                <div class="points-minus">
                    <img src="@/assets/icons/minus.svg">
                    <span>Ограниченный дизайн</span>
                </div>
                <div class="points-minus">
                    <img src="@/assets/icons/minus.svg">
                    <span>Медленная загрузка сайта</span>
                </div>
                <div class="points-minus">
                    <img src="@/assets/icons/minus.svg">
                    <span>Сайт принадлежит не Вам</span>
                </div>
                <div class="points-minus">
                    <img src="@/assets/icons/minus.svg">
                    <span>Полезные функции по платной подписке</span>
                </div>
                <div class="points-minus">
                    <img src="@/assets/icons/minus.svg">
                    <span>Проблемы с SEO-продвижением</span>
                </div>
                <div class="points-minus">
                    <img src="@/assets/icons/minus.svg">
                    <span>Отсутствие маркетингового анализа</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "HomeComparison"
    }
</script>

<style scoped>
.background {
    padding: 40px 0 40px 0;
    width: 100%;
    background: #F6F6F6;
}
.title {
    width: 40%;
    margin: auto;
    font-size: 23px;
    font-weight: bold;
    color: #333333;
    text-align: center;
}
.comparison {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
.headline {
    font-size: 18px;
    color: #333333;
    font-weight: 500;
}
.points {
    display: flex;
    align-items: center;
    margin-top: 5px;
 }
.points > img {
    width: 10px;
    margin-right: 5px;
}
.points > span {
    font-size: 16px;
    color: #686868;
}
.points-minus {
    display: flex;
    align-items: center;
    margin-top: 5px;
}
.points-minus > img {
    width: 10px;
    margin-right: 5px;
}
.points-minus > span {
    font-size: 16px;
    color: #686868;
}
.man-question > img {
    margin-left: 45px;
    margin-right: 45px;
    width: 220px;
}
@media screen and (min-width: 1920px) {
    .man-question > img {
        margin-left: 55px;
        margin-right: 55px;
    }
    .title {
        width: 25%;
    }
}
@media screen and (max-width: 1536px) {
    .man-question > img {
        margin-left: 55px;
        margin-right: 55px;
    }
    .title {
        width: 40%;
    }
}
@media screen and (max-width: 1024px) {
    .man-question > img {
        width: 170px;
    }
}
@media screen and (max-width: 960px) {
    .man-question {
        display: none;
    }
    .comparison {
        display: block;
        margin-top: 25px;
    }
    .points {
        display: block;
    }
    .points-minus {
        display: block;
    }
    .points-minus > img {
        margin-bottom: 4px;
    }
    .pluse {
        text-align: center;
        margin-bottom: 25px;
    }
    .minus {
        text-align: center;
    }
    .title {
        width: 60%;
    }
}
@media screen and (max-width: 723px) {
    .title {
        width: 70%;
    }
}
@media screen and (max-width: 600px) {
    .title {
        font-size: 18px;
    }
    .headline {
        font-size: 16px;
    }
    .points > span {
        font-size: 14px;
    }
    .points-minus > span {
        font-size: 14px;
    }
}
@media screen and (max-width: 530px) {
    .title {
        width: 80%
    }
    .background {
        padding: 50px 0 50px 0;
    }
}
@media screen and (max-width: 450px) {
    .title {
        width: 90%;
    }
}
@media screen and (max-width: 375px) {
    .title {
        font-size: 16px;
        width: 98%;
    }
    .headline {
        font-size: 15px;
    }
}
</style>