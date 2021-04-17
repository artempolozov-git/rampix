<template>
    <div class="home-feedback">
        <div class="feedbackform">
            <form id="feedback-home" action="https://formspree.io/f/xzbypove" method="POST" class="form">
                <input name="Имя" type="text" placeholder="Введите имя" class="input-form" required>
                <input name="Контакты" type="text" placeholder="Как с вами связаться?" class="input-phone" required>
                <input type="submit" id="my-form-button" class="send-button" value="Отправить заявку">
                <span class="status-complete" id="my-form-status"></span>
            </form>
        </div>
        <div class="man-search" v-tilt><img alt="Находим своих клиентов в интернете" src="@/assets/icons/searchman.svg"></div>
    </div>
</template>

<script>
    export default {
        name: "HomeFeedback",
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

            var form = document.getElementById("feedback-home");
            var button = document.getElementById("my-form-button");
            var status = document.getElementById("my-form-status");

            // Success and Error functions for after the form is submitted

            function success() {
                form.reset();
                button.style = "display: none ";
                status.innerHTML = "Спасибо, мы скоро c Вами свяжемся!";
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
.home-feedback {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
}
.feedbackform {
    padding: 50px 50px;
    background-color: white;
    box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
    border-radius: 7px;
    transition: all .2s ease-in;
}
.feedbackform:hover {
    transition: all .2s ease-in;
    transform: scale(1.01);
}
.form {
    text-align: center;
}
.form-group input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.input-form {
    display: flex;
    margin: auto;
    margin-bottom: 30px;
    padding: 0 15px;
    height: 45px;
    width: 240px;
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
.input-phone {
    display: flex;
    margin: auto;
    margin-bottom: 30px;
    padding: 0 15px;
    height: 45px;
    width: 240px;
    font-family: "GoogleSans";
    color: #333333;
    font-size: 16px;
    background-color: white;
    box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
    border-radius: 7px;
    border: none;
    transition: background-color .2s ease-in;
}
.input-phone:focus {
    outline: none;
    background-color: rgba(59, 156, 208, 0.08);
}
.input-phone::-webkit-input-placeholder {
    color: rgba(23, 28, 22, 0.71);
    font-family: "GoogleSans";
}
.input-phone:focus {
    outline: none;
}
.input-phone::-ms-clear {
    display: none;
}
.input-phone::-webkit-search-cancel-button {
    display: none;
}
.send-button {
    width: 170px;
    height: 45px;
    margin: auto;
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
.send-button:hover {
    transition: all .2s ease;
    cursor: pointer;
    opacity: 0.8;
}
.send-button::selection {
    outline: none;
    background: transparent;
}
.send-button:focus {
    outline: none;
}
.status-complete {
    margin-top: 15px;
    font-size: 16px;
    text-align: center;
    font-family: "GoogleSans";
    font-weight: normal;
    color: #686868;
}
.man-search > img {
    margin-left: 75px;
    width: 280px;
}
@media screen and (max-width: 1024px) {
    .man-search > img {
        width: 170px;
    }
}
@media screen and (max-width: 800px) {
    .man-search > img {
        display: none;
    }
}
@media screen and (max-width: 600px) {
    .feedbackform {
        padding: 40px 40px;
    }
    .input-form {
        font-size: 14px;
    }
    .input-phone {
        font-size: 14px;
    }
    .send-button {
        width: 150px;
        font-size: 14px;
    }
}
@media screen and (max-width: 400px) {
    .feedbackform {
       display: none;
    }
}
</style>