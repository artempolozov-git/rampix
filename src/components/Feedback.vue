<template>
<div id="feedback" style="display: none;">

    <div class="overlay">
        <form id="feedback-form" action="https://formspree.io/f/xzbypove" method="POST" class="form-wrapper WOW animate__zoomIn">

            <div style="display: block; width: 100%;">
                <div class="title-form">Заполните заявку</div>
                <div class="button-close">
                    <span style="font-family: 'GoogleSans'" class="closebtn" @click="toggleForm">&times;</span>
                 </div>

                <div class="data-input">
                    <div class="left-block">
                        <div class="form-group">
                            <label class="form-label">Ваше имя:</label>
                            <input name="Имя" type="text" class="input-form" placeholder="Введите имя" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Ваши контакты:</label>
                            <input name="Способ связи" type="text" class="input-form" placeholder="Ссылка на мессенджер или почту" required>
                        </div>
                        <div class="radio-button">
                            <input type="radio" id="writing" name="select" value="Написать" checked>
                            <label for="writing">Написать</label>
                            <input type="radio" id="call" name="select" value="Позвонить" style="margin-left: 15px">
                            <label for="call">Позвонить</label>
                        </div>
                    </div>

                    <div class="right-block">
                        <div class="form-group">
                            <label for="services" class="form-label">Выберите нужный сайт:</label>
                            <select name="Сайт" class="input-form">
                                <option value="Промо-сайт">Сайт-визитка</option>
                                <option value="Landing page">Одностраничный сайт</option>
                                <option value="Многостраничный сайт">Многостраничный сайт</option>
                            </select>
                        </div>
                        <div class="form-group-bottom">
                            <label for="services" class="form-label">Выберите пакет услуг:</label>
                            <select name="Пакет услуг" class="input-form">
                                <option value="Старт">Пакет услуг «Старт»</option>
                                <option value="Бизнес">Пакет услуг «Бизнес»</option>
                                <option value="Профи">Пакет услуг «Профи»</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group-comment">
                    <label class="form-label">Комментарий:</label>
                    <textarea name="Комментарий" class="form-comment" placeholder="Дополнительная информация к заказу"></textarea>
                </div>
                <input type="submit" id="my-form-button" class="feedback-button" value="Отправить заявку">
                <span class="form-status" id="my-form-status"></span>
            </div>
        </form>
    </div>
</div>
</template>

<script>

    export default {
        components: {
        },
        data() {
            return {};
        },
        computed: {

        },
        methods: {
            toggleForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
        mounted() {

            // get the form elements defined in your form HTML above

            var form = document.getElementById("feedback-form");
            var button = document.getElementById("my-form-button");
            var status = document.getElementById("my-form-status");

            // Success and Error functions for after the form is submitted

            function success() {
                form.reset();
                button.style = "display: none ";
                status.innerHTML = "Спасибо, мы скоро c Вами свяжемся! ✔";
            }

            function error() {
                status.innerHTML = "Произошла ошибка при отправке!";
            }

            // handle the form submission event
            console.log(form)
            form.addEventListener("submit", function(ev) {
                ev.preventDefault();
                var data = new FormData(form);
                ajax(form.method, form.action, data, success, error);
            });


            // helper function for sending an AJAX request

            function ajax(method, url, data, success, error) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.setRequestHeader("Accept", "application/json");
                xhr.onreadystatechange = function() {
                    if (xhr.readyState !== XMLHttpRequest.DONE) return;
                    if (xhr.status === 200) {
                        success(xhr.response, xhr.responseType);
                    } else {
                        error(xhr.status, xhr.response, xhr.responseType);
                    }
                };
                xhr.send(data);
            }
        }
    };
</script>

<style scoped>
    .WOW {
        animation: zoomIn;
        animation-duration: 0.3s;
    }
    *{
        box-sizing: border-box;
    }
    .button-close {
        transition: 0.3s;
        position: absolute;
        z-index: 100;
        right: 20px;
        top: 15px;
    }
    .closebtn {
        color: #333333;
        font-weight: normal;
        font-size: 40px;
        line-height: 24px;
        cursor: pointer;
        transition: 0.3s;
    }
    .closebtn:hover {
        color: #686868;
        transition: 0.3s;
    }
    .closebtn::selection {
        outline: none;
        background: transparent;
    }
    #feedback {
        height: 100%;
        width: 100%;
        position: fixed;
        background-color: rgba(51, 51, 51, 0.4);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
    }
    .overlay {
        height: 100%;
        width: 850px;
        top: 300px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        overflow: auto;
        z-index: 100;
        position: fixed;
    }
    .form-wrapper {
        display: flex;
        padding: 50px 50px;
        background-color: white;
        border-radius: 7px;
    }
    .data-input {
        display: flex;
    }
    .left-block {
        width: 50%;
    }
    .right-block {
        width: 50%;
        margin-left: 30px;
    }
    .title-form {
        font-size: 23px;
        margin-bottom: 21px;
        font-weight: bold;
        color: #333333;
    }
    .form-group {
        margin-bottom: 21px;
        display: flex;
        flex-direction: column;
    }
    .form-group-bottom {
        display: flex;
        flex-direction: column;
    }
    .form-label {
        font-weight: bold;
        font-family: "GoogleSans";
        color: #333333;
        font-size: 16px;
        margin-bottom: 10px;
    }
    .radio-button {
        margin-bottom: 21px;
    }
    .input-form {
        padding: 0 15px;
        height: 45px;
        font-family: "GoogleSans";
        color: #333333;
        font-size: 16px;
        background-color: white;
        box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
        border-radius: 7px;
        border: none;
        transition: background-color .2s ease-in;
    }
    .input-form:focus {
        outline: none;
        background-color: rgba(59, 156, 208, 0.08);
    }
    .input-form::-webkit-input-placeholder {
        color: rgba(23, 28, 22, 0.71);
        font-family: "GoogleSans";
    }
    .form-group input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .form-comment {
        width: 100%;
        height: 129px;
        margin: 10px 0 20px 0;
        padding: 10px 15px;
        font-family: "GoogleSans";
        color: #333333;
        font-size: 16px;
        background-color: white;
        box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
        border-radius: 7px;
        border: none;
        transition: background-color .2s ease-in;
        resize: none;
    }
    .form-comment:focus {
        outline: none;
        background-color: rgba(59, 156, 208, 0.08);
    }
    .feedback-button {
        width: 100%;
        height: 45px;
        text-align: center;
        color: white;
        font-size: 16px;
        font-family: "GoogleSans";
        font-weight: bold;
        background-color: #1c89ea;
        border: none;
        border-radius: 7px;
        transition: all .2s ease;
    }
    .feedback-button:hover {
        transition: all .2s ease;
        cursor: pointer;
        opacity: 0.8;
    }
    .feedback-button::selection {
        outline: none;
        background: transparent;
    }
    .feedback-button:focus {
        outline: none;
    }
    .form-status{
        margin-top: 15px;
        font-size: 21px;
        text-align: center;
        font-family: "GoogleSans";
        font-weight: normal;
        color: #27BF1E;
    }
    .overlay::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
    .feedback-man > img {
        margin-left: 50px;
        width: 280px;
    }
    @media screen and (max-width: 1800px) {
        .overlay {
            top: 250px;
        }
    }
    @media screen and (max-width: 1536px) {
        .overlay {
            top: 100px;
        }
    }
    @media screen and (max-width: 1366px) {
        .overlay {
            top: 50px;
        }
    }
    @media screen and (max-width: 1024px) {
        .data-input {
            display: block;
        }
        .overlay {
            width: 550px;
            top: 200px;
        }
        .title-form {
            font-size: 18px;
            text-align: center;
        }
        .left-block {
            width: 100%;
        }
        .right-block {
            width: 100%;
            margin-left: 0;
        }
        .form-group-comment {
            margin-top: 21px;
        }
        .feedback-button {
            display: flex;
            justify-content: center;
            margin: auto;
            margin-top: 30px;
        }
    }
    @media screen and (max-width: 800px) {
        .overlay {
            top: 200px;
        }
    }
    @media screen and (max-width: 600px) {
        .overlay {
            top: 0px;
            width: auto;
        }
        .form-submit {
            width: 135px;
            height: 35px;
        }
        div .content-wrapper {
            font-size: 20px;
        }
        div .form-wrapper {
            padding: 30px 35px 30px 35px;
            width: 100%;
            height: auto;
            align-items: center;
        }
        .form-comment {
            font-size: 14px;
        }
        .input-form {
            font-size: 14px;
        }
        .title-form {
            font-size: 16px;
        }
        .button-close {
            right: 30px;
            top: 25px;
        }
    }
    @media screen and (max-width: 520px) {
        div .overlay {
            width: 100%;
            top: 0px;
        }
        div .form-wrapper {
            padding: 30px 35px 30px 35px;
            width: 100%;
            align-items: center;
        }
        div .form-label {
            font-size: 16px;
        }
        div .form-status {
            font-size: 16px;
        }
        .closebtn {
            font-size: 32px;
            line-height: 0px;
        }
    }
    @media screen and (max-width: 416px) {
        div .form-wrapper {
            padding: 30px 35px 30px 35px;
            width: 100%;
        }
        div .form-label {
            font-size: 14px;
        }
        div .form-status {
            font-size: 14px;
        }
        .button-close {
            right: 30px;
            top: 25px;
        }
    }
    @media screen and (max-width: 375px) {
        .input-form {
            font-size: 14px;
        }
        .feedback-button {
            width: 150px;
            font-size: 14px;
        }
    }
</style>