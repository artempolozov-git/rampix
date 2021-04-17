<template>
    <div class="header-logo">
        <a class="logotype" href="https://rampix.ru"><img src="@/assets/icons/rampix-logotype.svg"></a>
        <a class="logo-text" href="https://rampix.ru">
            <h3>Веб-дизайн <br> и разработка сайтов</h3>
        </a>
    </div>
</template>

<script>
    export default {
        name: "HeaderLogo"
    }
</script>

<style scoped>
.header-logo {
    display: flex;
    align-items: center;
    transition: opacity .2s ease-in;
}
.header-logo:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease-in;
}
.logotype {
    width: 200px;
    transition: opacity .2s ease-in;
}
.logo > span {
    color: #333333;
    font-weight: bold;
    font-size: 32px;
    margin-left: 3px;
}
.logo-text {
    margin-left: 15px;
    text-decoration: none;
}
.logo-text > h3 {
    font-size: 16px;
    color: #686868;
    font-weight: normal;
}
@media screen and (max-width: 1370px) {
    .logotype {
        width: 170px;
    }
}
@media screen and (max-width: 1024px) {

}
@media screen and (max-width: 600px) {
    .logotype {
        width: 120px;
    }
}
@media screen and (max-width: 360px) {
    .logo-text {
        display: none;
    }
}
</style>