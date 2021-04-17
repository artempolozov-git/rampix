<template>
    <div id="feedback-reviews" style="display: none;">

        <div class="overlay-reviews">

            <form id="feedback-reviews-form" action="https://formspree.io/f/xzbypove" method="POST" class="form-wrapper WOW animate__zoomIn">

                <div style="display: block; width: 100%;">
                    <div class="title-form">Оставьте отзыв</div>
                    <div class="button-close">
                        <span style="font-family: 'GoogleSans'" class="closebtn" @click="toggleForm">&times;</span>
                    </div>

                    <div class="data-input">
                        <div class="left-block">
                            <div class="form-group">
                                <label class="form-label">Ваше имя:</label>
                                <input name="Имя" type="text" class="input-form" placeholder="Введите имя" required>
                            </div>

                            <fieldset class="rating">
                                <legend class="form-label">Оцените качество:</legend>
                                <div class="rating__group">
                                    <input class="rating__star" type="radio" name="Звезд" value="1">
                                    <input class="rating__star" type="radio" name="Звезд" value="2">
                                    <input class="rating__star" type="radio" name="Звезд" value="3">
                                    <input class="rating__star" type="radio" name="Звезд" value="4">
                                    <input class="rating__star" type="radio" name="Звезд" value="5">
                                </div>
                            </fieldset>

                            <div class="form-group">
                                <label class="form-label">Достоинства:</label>
                                <textarea name="Достоинства" class="form-message-plus" placeholder="Опишите достоинства"></textarea>
                            </div>
                        </div>

                        <div class="right-block">
                            <div class="form-group">
                                <label class="form-label">Недостатки:</label>
                                <textarea name="Недостатки" class="form-message-minus" placeholder="Опишите недостатки"></textarea>
                            </div>

                            <div class="form-group-comment">
                                <label class="form-label">Комментарий:</label>
                                <textarea name="Комментарий" class="form-comment" placeholder="Оставьте комментарий" required></textarea>
                            </div>
                        </div>
                    </div>
                    <input type="submit" id="reviews-form-button" class="feedback-button" value="Отправить отзыв">
                    <span class="form-status" id="reviews-form-status"></span>
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
                var form = document.getElementById("feedback-reviews");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
        mounted() {

            // get the form elements defined in your form HTML above

            var form = document.getElementById("feedback-reviews-form");
            var button = document.getElementById("reviews-form-button");
            var status = document.getElementById("reviews-form-status");

            // Success and Error functions for after the form is submitted

            function success() {
                form.reset();
                button.style = "display: none ";
                status.innerHTML = "Спасибо! Ваш отзыв скоро появится";
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
    #feedback-reviews {
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
    .overlay-reviews {
        height: 100%;
        width: 900px;
        top: 350px;
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
        align-items: center;
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
    .form-group-comment {

    }
    .form-label {
        font-weight: bold;
        font-family: "GoogleSans";
        color: #333333;
        font-size: 16px;
        margin-bottom: 10px;
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
    .form-message-plus {
        width: 100%;
        height: 90px;
        padding: 10px 15px;
        font-family: "GoogleSans";
        color: #333333;
        font-size: 16px;
        background-color: white;
        box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
        border-radius: 7px;
        border: none;
        transition: background-color .2s ease-in;
    }
    .form-message-plus:focus {
        outline: none;
        background-color: rgba(51, 208, 102, 0.08);
    }
    .form-message-minus {
        width: 100%;
        height: 90px;
        padding: 10px 15px;
        font-family: "GoogleSans";
        color: #333333;
        font-size: 16px;
        background-color: white;
        box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
        border-radius: 7px;
        border: none;
        transition: background-color .2s ease-in;
    }
    .form-message-minus:focus {
        outline: none;
        background-color: rgba(208, 31, 27, 0.08);
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
    .form-status{
        font-size: 16px;
        text-align: center;
        font-family: "GoogleSans";
        font-weight: normal;
        color: #686868;
    }
    .overlay::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
    .rating {
        margin: 0 0 21px 0;
        padding: 0;
        border: none;
    }
    /* Caption */
    .rating__caption {
        margin-bottom: 0.5em;
        padding: 0;
    }
    /* Group */
    .rating__group {
        position: relative;
        width: 10em;
        height: 2em;
        background-image: url(../assets/icons/emptystar.svg);
        background-size: 2em auto;
        background-repeat: repeat-x;
    }
    .rating__group:focus-within {
        outline:none;
    }
    /* Star */
    .rating__star {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        height: 2em;
        font-size: inherit;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-size: 2em auto;
        background-repeat: repeat-x;
        cursor: pointer;
    }
    .rating__star:focus {
        outline: none;
    }
    .rating__star:hover,
    .rating__star:checked {
        background-image: url(../assets/icons/star.svg);
    }

    .rating__star:hover ~ .rating__star {
        background-image: url(../assets/icons/emptystar.svg);
    }

    /* Options */

    .rating__star:nth-of-type(1) {
        z-index: 5;
        width: 2em;
    }

    .rating__star:nth-of-type(2) {
        z-index: 4;
        width: 4em;
    }

    .rating__star:nth-of-type(3) {
        z-index: 3;
        width: 6em;
    }

    .rating__star:nth-of-type(4) {
        z-index: 2;
        width: 8em;
    }

    .rating__star:nth-of-type(5) {
        z-index: 1;
        width: 10em;
    }

    ::-webkit-scrollbar-button {
        background-image:url('');
        background-repeat:no-repeat;
        width:5px;
        height:0px
    }

    ::-webkit-scrollbar-track {
        background-color: #f3f3f3;
        border-radius: 7px;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 0px;
        border-radius: 7px;
        background-color: #1c89ea;
    }

    ::-webkit-scrollbar-thumb:hover{
        background-color: #3589d0;
    }

    ::-webkit-resizer{
        background-image:url('');
        background-repeat:no-repeat;
        width:4px;
        height:0px
    }

    ::-webkit-scrollbar{
        width: 6px;
    }
    @media screen and (max-width: 1800px) {
        .overlay-reviews {
            top: 250px;
        }
    }
    @media screen and (max-width: 1536px) {
        .overlay-reviews {
            top: 200px;
        }
    }
    @media screen and (max-width: 1366px) {
        .overlay-reviews {
            top: 100px;
        }
    }
    @media screen and (max-width: 1024px) {
        .data-input {
            display: block;
        }
        .overlay-reviews {
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
        .feedback-button {
            display: flex;
            justify-content: center;
            margin: auto;
            margin-top: 30px;
        }
    }
    @media screen and (max-width: 800px) {
        .overlay-reviews {
            top: 200px;
        }
    }
    @media screen and (max-width: 600px) {
        .overlay-reviews {
            top: 0;
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
        }
        .input-form {
            font-size: 14px;
        }
        div .form-label {
            font-size: 14px;
        }
        .title-form {
            font-size: 16px;
        }
        div .form-input {
            font-size: 14px;
            height: 40px;
        }
        .form-comment {
            font-size: 14px;
        }
        div .form-message {
            font-size: 14px;
            height: 100px;
        }
        div .form-submit {
            font-size: 14px;
            margin: 0;
        }
        div .form-status {
            font-size: 14px;
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
            height: auto;
        }
    }
    @media screen and (max-width: 375px) {
        .feedback-button {
            width: 150px;
            font-size: 14px;
        }
    }
</style>