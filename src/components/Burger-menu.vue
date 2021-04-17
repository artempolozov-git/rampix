<template>
    <div>
        <Slide right :closeOnNavigation="true" noOverlay>
            <span class="bm-cross-button cross-style" style="/* right: 250px; */"></span>
            <div v-scroll-to="'#services-block'">Услуги</div>
            <div v-scroll-to="'#portfolio-block'">Портфолио</div>
            <div v-scroll-to="'#prices-block'">Цены</div>
            <div v-scroll-to="'#review-block'">Отзывы</div>
            <div v-scroll-to="'#contacts-block'">Контакты</div>

            <div class="contacts-burger">
                <div class="contact-burger">
                    <a target="_blank" class="icon-burger" href="mailto:info@rampix.ru"><img alt="Дизайн иконки электронной почты" src="@/assets/icons/email.svg"></a>
                </div>
                <div class="contact-burger">
                    <a target="_blank" class="messengers-burger" href="https://api.whatsapp.com/send?phone=+79191650972&text=&source=&data=&app_absent="><img alt="Дизайн иконки ватсапа" src="@/assets/icons/wa.svg"></a>
                </div>
                <div class="contact-burger">
                    <a target="_blank" class="messengers-burger" href="https://t.me/rampixmanager"><img alt="Иконка телеграма" src="@/assets/icons/tg.svg"></a>
                </div>
                <div class="contact-burger">
                    <a target="_blank" class="messengers-burger" title="Behance" href="https://www.behance.net/rampix-studio"><img alt="Иконка behance" src="@/assets/icons/behance.svg"></a>
                </div>
            </div>
            <span class="mail-text">info@rampix.ru</span>
        </Slide>
    </div>
</template>

<script>
    import { Slide } from 'vue-burger-menu'
    export default {
        name: "Burger-menu",
        components: {
            Slide // Register your component
        }
    }
</script>

<style>
    .bm-burger-button {
        cursor: pointer;
        height: 25px;
        position: absolute;
        top: 45px;
        width: 35px;
    }
    .bm-burger-bars {
        background-color: #333333;
    }
    .line-style {
        position: absolute;
        height: 20%;
        left: 0;
        right: 0;
    }
    .cross-style {
        position: absolute;
        top: 12px;
        right: 2px;
        cursor: pointer;
    }
    .bm-cross {
        background: #333333;
        height: 25px;
    }
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }
    .bm-menu {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1000; /* Stay on top */
        top: 0;
        left: 0;
        background-color: white; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
        box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
    }

    .bm-overlay {
        background: rgba(0, 0, 0, 0);
    }
    .bm-item-list {
        color: #333333;
        margin-left: 10%;
        font-size: 16px;
        cursor: pointer;
    }
    .bm-item-list > * {
        display: flex;
        text-decoration: none;
        padding: 16px;
    }
    .bm-item-list > * > span {
        margin-left: 10px;
        font-weight: 700;
        color: white;
    }

    .contacts-burger {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 70px;
    }
    .contact-burger {
        display: flex;
        align-items: center;
        transition: opacity .2s ease-in;
    }
    .icon-burger {
        display: flex;
        align-items: center;
        text-decoration:none;
    }
    .icon-burger > img {
        width: 40px;
        height: 40px;
        transition: opacity .2s ease-in;
    }
    .icon > span {
        font-size: 16px;
        color: #686868;
        margin-left: 5px;
        font-weight: 500;
    }
    .contact-burger:hover {
        cursor: pointer;
        opacity: 0.8;
        transition: opacity .2s ease-in;
    }
    .contact-burger > span {
        font-size: 16px;
        color: #686868;
        margin-left: 5px;
        font-weight: 500;
    }
    .messengers-burger {
        display: flex;
        align-items: center;
        text-decoration:none;
    }
    .messengers-burger > img {
        margin-left: 25px;
        width: 40px;
        height: 40px;
        transition: opacity .2s ease-in;
    }
    .messengers-burger > span {
        font-size: 16px;
        color: #686868;
        margin-left: 5px;
        font-weight: 500;
    }
    .mail-text {
        padding: 10px 16px 16px 16px;
        font-size: 16px;
        font-weight: normal;
        color: #333333;
    }
    @media screen and (max-width: 600px) {
        .bm-burger-button {
            top: 45px;
        }
        .bm-item-list {
            font-size: 14px;
            margin-left: 7%;
        }
        .contacts-burger {
            margin-right: 25px;
        }
        .messengers-burger > img {
            width: 40px;
            height: 40px;
        }
        .icon-burger > img {
            width: 40px;
            height: 40px;
        }
        .mail-text {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 450px) {
        .bm-burger-button {
            height: 20px;
            width: 30px;
        }
    }
    @media screen and (max-width: 375px) {
        .bm-burger-button {
            top: 25px;
        }
    }
</style>