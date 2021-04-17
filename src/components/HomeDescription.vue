<template>
    <div class="description-wrapper">
        <div class="description">
            <vue-typer :text='["Привет!","Нужна разработка сайта?","Мы реализуем Ваш проект!"]'
                 erase-style='backspace' pre-erase-delay='800' erase-delay='50'
            ></vue-typer>
            <h2 style="margin-top: 10px">Мы создаем продающие сайты для любой сферы бизнеса!</h2>
            <h2>Мы предлагаем индивидуальный дизайн сайта, адаптивную верстку, веб-разработку, UX/UI дизайн, SEO-оптимизацию сайта, слайдеры, анимации,
                формы обратной связи и призывы к действию, виджет обратного звонка, настройку корпоративной почты,
                техническую поддержку, обновление старого сайта. <br>
                Подключение инструментов веб-аналитики.</h2>
        </div>
        <div class="send-button" @click="toggleForm">
            <span>Оставить заявку</span>
        </div>

    </div>
</template>

<script>
    import { VueTyper } from 'vue-typer'
    export default {
        name: "HomeDescription",
        components: {
                VueTyper
            },
        methods:{
            toggleForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
    }
</script>

<style>
.vue-typer {
  font-family: "GoogleSans";
    font-size: 29px;
    font-weight: bold;
}
.vue-typer .custom.char.typed {
    color: #333333;
}
.description > h2 {
    width: 90%;
    font-size: 18px;
    font-weight: normal;
    color: #686868;
    margin: 0;
    margin-left: 1px;
}
.send-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
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
@media screen and (min-width: 1920px) {
    .description > h2 {
        width: 80%;
    }
}
@media screen and (min-width: 1440px) {
    .description > h2 {
        width: 80%;
    }
}
@media screen and (max-width: 1024px) {
    .description {
        text-align: center;
        margin-bottom: 30px;
    }
    .send-button {
        margin: auto;
    }
    .description-wrapper {
        margin-bottom: 40px;
    }
    .description > h2 {
        width: 100%;
        margin-left: 0px;
    }
}
@media screen and (max-width: 600px) {
    .description > h1 {
        font-size: 25px;
    }
    .description > h2 {
        font-size: 14px;
        margin: auto;
    }
    .send-button {
        width: 150px;
    }
    .send-button > span {
        font-size: 14px;
    }
    .vue-typer {
        font-size: 21px;
    }
}
@media screen and (max-width: 360px) {
    .description-wrapper {
        margin-bottom: 20px;
    }
    .description > h1 {
        font-size: 21px;
    }
    .vue-typer {
        font-size: 18px;
    }
    .description > h2 {
        font-size: 14px;
        width: 100%;
        margin: auto;
    }
}
</style>