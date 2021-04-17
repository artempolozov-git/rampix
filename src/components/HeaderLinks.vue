<template>
    <div class="links-container">
        <div class="link-first" v-scroll-to="'#services-block'">Услуги</div>
        <div class="link" v-scroll-to="'#portfolio-block'">Портфолио</div>
        <div class="link" v-scroll-to="{el:'#prices-block', offset: -100}">Цены</div>
        <div class="link" v-scroll-to="'#review-block'">Отзывы</div>
        <div class="link" v-scroll-to="'#contacts-block'">Контакты</div>
    </div>
</template>

<script>
    export default {
        name: "HeaderLinks"
    }
</script>

<style scoped>
.links-container {
    display: flex;
    margin:auto;
}
.link-first {
    font-size: 16px;
    color: #686868;
    transition: color  .2s ease-in;
}
.link-first:hover {
    color: #057be9;
    cursor: pointer;
    transition: color .2s ease-in;
}
.link {
    margin-left: 55px;
    font-size: 16px;
    color: #686868;
    cursor: pointer;
    transition: color .2s ease-in;
}
.link:hover {
    color: #057be9;
    cursor: pointer;
    transition: color .2s ease-in;
}
@media screen and (min-width: 1920px) {
    .link {
        margin-left: 70px;
    }
}
@media screen and (min-width: 1440px) {
    .link {
        margin-left: 70px;
    }
}
@media screen and (max-width: 1280px) {
    .links-container {
        display: none;
    }
}
</style>