<template>
<div>
    <div style="height: 70px" id="services-block"></div>
    <div class="service-container">
        <div class="title">Для Вас мы реализуем</div>
        <div class="services" data-aos="fade-up"
             data-aos-anchor-placement="top-bottom">
            <div class="service">
                <div class="icon-design"></div>
                <h2 class="headline">Индивидуальный дизайн</h2>
                <h3 class="service-desc">Создадим индивидуальный дизайн сайта на основе ваших пожеланий</h3>
                <div class="popup-design"></div>
            </div>
            <div class="service">
                <div class="icon-adaptive"></div>
                <h2 class="headline">Адаптивная верстка</h2>
                <h3 class="service-desc">Сайт будет подстраиваться под любое разрешение экрана</h3>
                <div class="popup-adaptive"></div>
            </div>
            <div class="service">
                <div class="icon-uxui"></div>
                <h2 class="headline">UX/UI дизайн</h2>
                <h3 class="service-desc">Интерфейс сайта будет понятен и прост в понимании пользователей</h3>
                <div class="popup-uxui"></div>
            </div>
            <div class="service">
                <div class="icon-feedback"></div>
                <h2 class="headline">Формы обратной связи</h2>
                <h3 class="service-desc">Устанавливают связь между посетителем и владельцем сайта</h3>
                <div class="popup-feedback"></div>
            </div>
            <div class="service">
                <div class="icon-slider"></div>
                <h2 class="headline">SEO-оптимизация сайта</h2>
                <h3 class="service-desc">Сайт будет оптимизирован для поисковых систем Яндекс и Google</h3>
                <div class="popup-slider"></div>
            </div>
            <div class="service">
                <div class="icon-analytics"></div>
                <h2 class="headline">Инструменты веб-аналитики</h2>
                <h3 class="service-desc">Показывают данные о посетителях сайта: их активность, географию, интересы</h3>
                <div class="popup-analytics"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "HomeServices"
    }
</script>

<style scoped>
.service-container {
    padding: 0 200px 70px;
    background: url(../assets/icons/servicesbackground.svg);
    background-size: cover;
    background-position: bottom;
    display: block;
}
.title {
    margin-bottom: 40px;
    font-size: 23px;
    font-weight: bold;
    color: #333333;
    text-align: center;
}
.services {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 2fr));
    grid-template-rows: repeat(2, 2fr);
    grid-column-gap: 7px;
    grid-row-gap: 7px;
}
.service {
    padding: 40px 40px;
    background-color: white;
    box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
    border-radius: 7px;
}

.service:hover .headline {
    color: white;
}
.service:hover .icon {
    fill: white;
}
.service:hover .service-desc {
    color: white;
}
.service:hover {
    background-color: #1c89ea;
    transition: all .2s ease;
    transform: scale(1.01);
}
.service:hover .icon-adaptive {
    background: url(../assets/icons/adaptive-white.svg);
    background-size: cover;
}
.service:hover .icon-uxui {
    background: url(../assets/icons/uxui-white.svg);
    background-size: cover;
}
.service:hover .icon-slider {
    background: url(../assets/icons/seo-white.svg);
    background-size: cover;
}
.service:hover .icon-feedback {
    background: url(../assets/icons/fbform-white.svg);
    background-size: cover;
}
.service:hover .icon-design {
    background: url(../assets/icons/design-white.svg);
    background-size: cover;
}
.service:hover .icon-analytics {
    background: url(../assets/icons/analytics-white.svg);
    background-size: cover;
}
.icon-adaptive {
    width: 58px;
    height: 50px;
    background: url(../assets/icons/adaptive.svg);
    background-size: cover;
}
.icon-uxui{
    width: 52px;
    height: 50px;
    background: url(../assets/icons/uxui.svg);
    background-size: cover;
}
.icon-slider{
    width: 52px;
    height: 50px;
    background: url(../assets/icons/seo.svg);
    background-size: cover;
}
.icon-feedback{
    width: 52px;
    height: 50px;
    background: url(../assets/icons/fbform.svg);
    background-size: cover;
}
.icon-design{
    width: 52px;
    height: 50px;
    background: url(../assets/icons/design.svg);
    background-size: cover;
}
.icon-analytics{
    width: 52px;
    height: 50px;
    background: url(../assets/icons/analytics.svg);
    background-size: cover;
}
.popup-adaptive{
    display:none;
    margin-top:17px;
    background: url(../assets/gif/responsive.gif);
    background-size: cover;
    background-position: center;
}
.service:hover .popup-adaptive{
    display:block;
    position:absolute;
    z-index:9999;
    width: 400px;
    height: 250px;
    box-shadow: 1px 1px 2px 1px rgba(204, 204, 204, 0.5);
}
.popup-uxui{
    display:none;
    margin-top:17px;
    margin-left: -50px;
    background: url(../assets/gif/uxui.gif);
    background-size: cover;
    background-position: center;
}
.service:hover .popup-uxui{
    display:block;
    position:absolute;
    z-index:9999;
    width: 400px;
    height: 250px;
    box-shadow: 1px 1px 2px 1px rgba(204, 204, 204, 0.5);
}
.popup-slider{
    display:none;
    margin-top:17px;
    background: url(../assets/gif/seo.gif);
    background-size: cover;
    background-position: center;
}
.service:hover .popup-slider{
    display:block;
    position:absolute;
    z-index:9999;
    width: 400px;
    height: 250px;
    box-shadow: 1px 1px 2px 1px rgba(204, 204, 204, 0.5);
}
.popup-feedback{
    display:none;
    margin-top:17px;
    margin-left: 50px;
    background: url(../assets/gif/feedback.gif);
    background-size: cover;
    background-position: center;
}
.service:hover .popup-feedback{
    display:block;
    position:absolute;
    z-index:9999;
    width: 400px;
    height: 250px;
    box-shadow: 1px 1px 2px 1px rgba(204, 204, 204, 0.5);
}
.popup-design{
    display:none;
    margin-top:17px;
    margin-left: 50px;
    background: url(../assets/gif/webdesign.gif);
    background-size: cover;
    background-position: center;
}
.service:hover .popup-design{
    display:block;
    position:absolute;
    z-index:9999;
    width: 400px;
    height: 250px;
    box-shadow: 1px 1px 2px 1px rgba(204, 204, 204, 0.5);
}
.popup-analytics{
    display:none;
    margin-top:17px;
    margin-left: -50px;
    background: url(../assets/gif/analytics.gif);
    background-size: cover;
    background-position: center;
}
.service:hover .popup-analytics{
    display:block;
    position:absolute;
    z-index:9999;
    width: 400px;
    height: 250px;
    box-shadow: 1px 1px 2px 1px rgba(204, 204, 204, 0.5);
}
.headline {
    margin: 10px 0;
    font-size: 18px;
    color: #333333;
    font-weight: 500;
}
.service-desc {
    width: 90%;
    font-size: 16px;
    color: #686868;
    font-weight: normal;
}
@media screen and (max-width: 1780px) {
    .service-container {
        padding: 0 100px 70px;
    }
}
@media screen and (max-width: 1690px) {
    .service-container {
        padding: 0 50px 70px;
    }
}
@media screen and (max-width: 1366px) {
    .services {
        grid-template-columns: repeat(auto-fill, minmax(315px, 2fr));
    }
}
@media screen and (max-width: 1280px) {

}
@media screen and (max-width: 1024px) {
    .services {
        grid-template-columns: repeat(auto-fill, minmax(400px, 2fr));
    }
    .service:hover .popup-adaptive{
        display:none;
    }
    .service:hover .popup-uxui{
        display:none;
    }
    .service:hover .popup-slider{
        display:none;
    }
    .service:hover .popup-feedback{
        display:none;
    }
    .service:hover .popup-design{
        display:none;
    }
    .service:hover .popup-analytics{
        display:none;
    }
}
@media screen and (max-width: 800px) {

}
@media screen and (max-width: 960px) {
    .service-container {
        padding: 0 70px 0px;
    }
}
@media screen and (max-width: 723px) {
    .service {
        padding: 30px 30px;
    }
    .service-blue {
        padding: 30px 30px;
    }
    .service-container {
        padding: 0px 40px 0px;
    }
}
@media screen and (max-width: 600px) {
    .title {
        font-size: 18px;
    }
    .headline {
        font-size: 16px;
    }
    .headline-white {
        font-size: 16px;
    }
    .service-desc {
        font-size: 14px;
    }
    .description-white {
        font-size: 14px;
    }
    .icon {
        width: 40px;
    }
}
@media screen and (max-width: 550px) {
    .services {
        grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
    }
}
@media screen and (max-width: 375px) {
    .title {
        font-size: 16px;
    }
    .headline {
        font-size: 15px;
    }
    .headline-white {
        font-size: 15px;
    }
    .service-container {
        padding: 0px 10px 0px;
    }
}
</style>