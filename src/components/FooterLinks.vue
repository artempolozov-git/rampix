<template>
    <div class="footer-links">
        <div class="link-nav">
            <span class="link-title">Навигация:</span>
            <p v-scroll-to="'#services-block'">Услуги</p>
            <p v-scroll-to="'#portfolio-block'">Портфолио</p>
            <p v-scroll-to="'#prices-block'">Цены</p>
            <p v-scroll-to="'#review-block'">Отзывы</p>
            <p v-scroll-to="'#contacts-block'">Контакты</p>
        </div>
        <div class="link">
            <span class="link-title">Услуги:</span>
            <p v-scroll-to="'#services-block'">Индивидуальный дизайн</p>
            <p v-scroll-to="'#services-block'">Адаптивная верстка</p>
            <p v-scroll-to="'#services-block'">UX/UI дизайн</p>
            <p v-scroll-to="'#services-block'">Формы обратной связи</p>
            <p v-scroll-to="'#services-block'">SEO-оптимизация сайта</p>
            <p v-scroll-to="'#services-block'">Инструменты веб-аналитики</p>
        </div>
        <div class="link">
            <span class="link-title">Цены:</span>
            <p v-scroll-to="'#prices-block'">Сайт-визитка</p>
            <p v-scroll-to="'#prices-block'">Landing page</p>
            <p v-scroll-to="'#prices-block'">Корпоративный сайт</p>
        </div>
        <div class="link-contacts">
            <span class="link-title">Контакты:</span>
            <div class="contacts">
                <a target="_blank" class="messengers" href="mailto:info@rampix.ru"><span>info@rampix.ru</span></a>
            </div>
            <div class="contacts">
                <a target="_blank" class="messengers" href="https://api.whatsapp.com/send?phone=+79191650972&text=&source=&data=&app_absent="><span>WhatsApp</span></a>
            </div>
            <div class="contacts">
                <a target="_blank" class="messengers" href="https://t.me/rampixmanager"><span>Telegram</span></a>
            </div>
            <div class="contacts">
                <a target="_blank" class="messengers" href="https://www.behance.net/rampix-studio"><span>Behance</span></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterLinks"
    }
</script>

<style scoped>
.footer-links {
    display: flex;
}
.link {
    margin-left: 60px;
}
.link-title {
    font-size: 18px;
    color: #333333;
    font-weight: bold;
}
.link > p {
    cursor: pointer;
    font-size: 16px;
    color: #686868;
    transition: opacity .2s ease-in;
}
.link > p:hover {
    opacity: 0.7;
    transition: opacity .2s ease-in;
}
.link-nav {
    margin-left: 60px;
}
.link-nav > p {
    cursor: pointer;
    font-size: 16px;
    color: #686868;
    transition: opacity .2s ease-in;
}
.link-nav > p:hover {
    opacity: 0.7;
    transition: opacity .2s ease-in;
}
.link-contacts {
    margin-left: 60px;
}
.link-contacts > p {
    cursor: pointer;
    font-size: 16px;
    color: #686868;
    transition: opacity .2s ease-in;
}
.link-contacts > p:hover {
    opacity: 0.7;
    transition: opacity .2s ease-in;
}
.contacts {
    margin-top: 16px;
}
.messengers {
    font-size: 16px;
    color: #686868;
    transition: opacity .2s ease-in;
    text-decoration:none;
}
.messengers:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity .2s ease-in;
}
@media screen and (min-width: 1920px) {
    .link {
        margin-left: 90px;
    }
}
@media screen and (min-width: 1440px) {
    .link {
        margin-left: 90px;
    }
}
@media screen and (max-width: 1024px) {
    .footer-links {
        display: flex;
    }
    .link {
        display: none;
    }
}
</style>