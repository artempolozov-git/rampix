<template>
    <div class="prices-box">
        <div>
            <div class="icon"><img src="@/assets/icons/ship.svg"></div>
            <div class="headline">Сайт-визитка</div>
            <div class="subtitle">«Старт»</div>
            <div class="more-details" @click="expendForm">
                <div>Подробнее</div>
                <div class="expend-icon"><img src="@/assets/icons/expand.svg"></div>
            </div>
            <div class="point-container" id="business-start">
                <div class="points">
                    <img src="@/assets/icons/lock.svg">
                    <span>Индивидуальный дизайн</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Адаптивная верстка</span>
                </div>
                <!--<div class="points">
                    <img src="@/assets/icons/lock.svg">
                    <span>Расширенный функционал</span>
                </div>!-->
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Слайдеры и анимации</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Формы обратной связи</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/lock.svg">
                    <span>Виджет обратного звонка</span>
                    <div class="novelty"><img src="@/assets/icons/new.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Файлы sitemap и robots.txt</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/lock.svg">
                    <span>Бесплатный хостинг</span>
                    <div class="novelty"><img src="@/assets/icons/new.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/lock.svg">
                    <span>Бесплатный домен</span>
                    <div class="novelty"><img src="@/assets/icons/new.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/lock.svg">
                    <span>Корпоративная почта</span>
                    <div class="novelty"><img src="@/assets/icons/new.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>SEO-оптимизация</span>
                    <div class="novelty"><img src="@/assets/icons/new.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/lock.svg">
                    <span>Подключение веб-аналитики</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/lock.svg">
                    <span>Техническая поддержка</span>
                </div>
            </div>
            <!--<div class="sum">от 15990₽</div>!-->
            <div class="send-button" @click="toggleForm">
                <span>Заказать</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LandingStart",
        methods:{
            expendForm(){
                var form = document.getElementById("business-start");
                form.style.display = (form.style.display == 'block') ? 'none' : 'block'
            },
            toggleForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
    }
</script>

<style scoped>
    .prices-box {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 30px;
        background-color: white;
        box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
        border-radius: 7px;
        transition: all .2s ease;
    }
    .prices-box:hover {
        transition: all .2s ease;
        transform: scale(1.01);
    }
    .icon {
        width: 105px;
        margin: auto;
        display: none;
    }
    .more-details {
        display: none;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .more-details > div {
        font-size: 16px;
        color: #686868;
    }
    .expend-icon {
        width: 10px;
        margin-left: 5px;
    }
    .point-container {
        display: block;
    }
    .headline {
        text-align: center;
        font-size: 21px;
        color: #333333;
        font-weight: bold;
        margin-top: 15px;
    }
    .subtitle {
        margin-bottom: 10px;
        text-align: center;
        font-size: 21px;
        color: #057be9;
        font-weight: bold;
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
    .novelty {
        position: relative;
        top: 3px;
        width: 50px;
        margin-left: 10px;
    }
    .sum {
        margin-top: 15px;
        text-align: center;
        font-size: 25px;
        color: #333333;
        font-weight: bold;
    }
    .send-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: 40px;
        width: 160px;
        height: 45px;
        background-color: #1c89ea;
        border-radius: 7px;
        transition: opacity .2s ease-in;
    }
    .send-button:hover {
        cursor: pointer;
        opacity: 0.8;
        transition: opacity .2s ease-in;
    }
    .send-button > span {
        color: white;
        font-weight: bold;
    }
    @media screen and (max-width: 1140px) {
        .point-container {
            display: none;
        }
        .more-details {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    @media screen and (max-width: 600px) {
        .prices-box:hover {
            transform: none;
        }
        .headline {
            font-size: 20px;
        }
        .subtitle {
            font-size: 20px;
        }
        .points > span {
            font-size: 16px;
        }
        .sum {
            font-size: 20px;
        }
        .send-button {
            width: 150px;
        }
        .send-button > span {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 375px) {
        .headline {
            font-size: 16px;
        }
        .subtitle {
            font-size: 16px;
        }
        .points > span {
            font-size: 14px;
        }
        .sum {
            font-size: 18px;
        }
        .novelty {
            display: none;
        }
        .more-details > div {
            font-size: 14px;
        }
        .expend-icon {
            width: 8px;
            margin-left: 5px;
        }
    }
</style>