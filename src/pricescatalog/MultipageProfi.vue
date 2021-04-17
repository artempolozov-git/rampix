<template>
    <div class="prices-box">
        <div>
            <div class="icon"><img src="@/assets/icons/origami.svg"></div>
            <div class="headline">Многостраничный сайт</div>
            <div class="subtitle">«Профи»</div>
            <div class="more-details" @click="expendForm">
                <div>Подробнее</div>
                <div class="expend-icon"><img src="@/assets/icons/expand.svg"></div>
            </div>
            <div class="point-container" id="multipage-profi">
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Индивидуальный дизайн</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Адаптивная верстка</span>
                </div>
                <!--<div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Расширенный функционал</span>
                </div>-->
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Слайдеры и анимации</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Формы обратной связи</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Виджет обратного звонка</span>
                    <div class="novelty"><img src="@/assets/icons/new.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Файлы sitemap и robots.txt</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Бесплатный хостинг на 1 мес.</span>
                    <div class="novelty"><img src="@/assets/icons/new.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Бесплатный домен в зоне .ru</span>
                    <div class="novelty"><img src="@/assets/icons/new.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Корпоративная почта</span>
                    <div class="novelty"><img src="@/assets/icons/new.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>SEO-оптимизация</span>
                    <div class="novelty"><img src="@/assets/icons/new.svg"></div>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Подключение веб-аналитики</span>
                </div>
                <div class="points">
                    <img src="@/assets/icons/unlock.svg">
                    <span>Техническая поддержка</span>
                </div>
            </div>
            <div class="amount">
                <div class="sum">от 39990₽</div>
                <div class="strike">45990₽</div>
            </div>
            <div class="send-button" @click="toggleForm">
                <span>Заказать</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MultipageProfi",
        methods:{
            expendForm(){
                var form = document.getElementById("multipage-profi");
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
    .icon {
        width: 90px;
        margin: auto;
        display: none;
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
        margin-left: 7px;
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
        color: #F44336;
        font-weight: bold;
    }
    .strike {
        margin-left: 15px;
        font-size: 21px;
        color: rgba(104, 104, 104, 0.7);
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
        margin-top: 15px;
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
    }
</style>