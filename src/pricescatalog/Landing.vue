<template>
    <div class="prices-box">
        <div>
            <div class="icon"><img src="@/assets/icons/paperairplane-white.svg"></div>
            <div class="headline">Одностраничный сайт</div>
            <div class="subtitle">«Бизнес»</div>
            <div class="more-details" @click="expendForm">
                <div>Подробнее</div>
                <div class="expend-icon"><img src="@/assets/icons/expand-white.svg"></div>
            </div>
            <div class="point-container" id="expand-landing">
                <div class="points">
                    <img src="@/assets/icons/unlock-white.svg">
                    <span>Индивидуальный дизайн</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock-white.svg">
                    <span>Адаптивная верстка</span>
                </div>
                <!--<div class="points">
                    <img src="@/assets/icons/lock-white.svg">
                    <span>Расширенный функционал</span>
                </div>-->
                <div class="points">
                    <img src="@/assets/icons/unlock-white.svg">
                    <span>Слайдеры и анимации</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock-white.svg">
                    <span>Формы обратной связи</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock-white.svg">
                    <span>Виджет обратного звонка</span>
                    <div class="novelty"><img src="@/assets/icons/new-white.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock-white.svg">
                    <span>Файлы sitemap и robots.txt</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock-white.svg">
                    <span>Бесплатный хостинг на 1 мес.</span>
                    <div class="novelty"><img src="@/assets/icons/new-white.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/lock-white.svg">
                    <span>Бесплатный домен</span>
                    <div class="novelty"><img src="@/assets/icons/new-white.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/lock-white.svg">
                    <span>Корпоративная почта</span>
                    <div class="novelty"><img src="@/assets/icons/new-white.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock-white.svg">
                    <span>SEO-оптимизация</span>
                    <div class="novelty"><img src="@/assets/icons/new-white.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock-white.svg">
                    <span>Подключение веб-аналитики</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/lock-white.svg">
                    <span>Техническая поддержка</span>
                </div>
            </div>
            <!--<div class="amount">
                <img src="@/assets/icons/flame.svg" title="самый частый выбор">
                <div class="sum">от 24999₽</div>
                <div class="strike">29999₽</div>
            </div>!-->
            <div class="send-button" @click="toggleForm">
                <span>Заказать</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Landing",
        methods:{
            expendForm(){
                var form = document.getElementById("expand-landing");
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
        background-color: #1c89ea;
        box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
        border-radius: 7px;
        transition: all .2s ease;
    }
    .prices-box:hover {
        transition: all .2s ease;
        transform: scale(1.01);
    }
    .more-details {
        display: none;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .more-details > div {
        font-size: 16px;
        color: white;
    }
    .expend-icon {
        width: 10px;
        margin-left: 5px;
    }
    .icon {
        width: 90px;
        margin: auto;
        display: none;
    }
    .point-container {
        display: block;
    }
    .headline {
        text-align: center;
        font-size: 21px;
        color: white;
        font-weight: bold;
        margin-top: 15px;
    }
    .subtitle {
        margin-bottom: 10px;
        text-align: center;
        font-size: 21px;
        color: white;
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
        color: white;
    }
    .novelty {
        position: relative;
        top: 3px;
        width: 50px;
        margin-left: 10px;
    }
    .amount {
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sum {
        text-align: center;
        font-size: 25px;
        color: white;
        font-weight: bold;
    }
    .strike {
        margin-left: 15px;
        font-size: 21px;
        color: rgba(255, 255, 255, 0.7);
        font-weight: bold;
        text-decoration: line-through;
    }
    .amount > img {
        width: 23px;
        margin-right: 10px;
    }
    .send-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: 40px;
        width: 160px;
        height: 45px;
        background-color: white;
        border-radius: 7px;
        transition: opacity .2s ease-in;
    }
    .send-button:hover {
        cursor: pointer;
        opacity: 0.9;
        transition: opacity .2s ease-in;
    }
    .send-button > span {
        color: #057be9;
        font-weight: bold;
    }
    @media screen and (min-width: 1920px) {
        .prices-box {
            background-position: bottom;
        }
    }
    @media screen and (max-width: 1140px) {
        .point-container {
            display: none;
        }
        .more-details {
            display: flex;
        }
    }
    @media screen and (max-width: 600px) {
        .prices-box:hover {
            transform: none;
        }
        .strike {
            font-size: 18px;
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
        .strike {
            font-size: 16px;
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
        .amount > img {
            display: none;
        }
    }
</style>