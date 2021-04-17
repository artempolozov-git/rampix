<template>
    <div class="mobile-navigation">
        <div class="icon-nav" v-scroll-to="'#top'"><img src="@/assets/icons/mobilehome.svg"></div>
        <div class="icon-nav-next" v-scroll-to="'#services-block'"><img src="@/assets/icons/mobileservices.svg"></div>
        <div class="icon-nav-portfolio" v-scroll-to="'#portfolio-block'"><img src="@/assets/icons/mobileportfolio.svg"></div>
        <div class="icon-nav-next" v-scroll-to="'#prices-block'"><img src="@/assets/icons/mobileprices.svg"></div>
        <div class="icon-nav-next" v-scroll-to="'#contacts-block'"><img src="@/assets/icons/mobilecontacts.svg"></div>
    </div>
</template>

<script>
    export default {
        name: "MobileNavigation"
    }
</script>

<style scoped>
    .mobile-navigation{
        display: none;
        position: sticky;
        box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
        bottom: 20px;
        margin: auto;
        width: 95%;
        background-color: white;
        border-radius: 50px;
    }
    @media screen and (max-width: 600px) {
        .mobile-navigation {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 85px;
        }
        .icon-nav {
            width: 40px;
        }
        .icon-nav-portfolio {
            width: 40px;
            margin-left: 50px;
        }
        .icon-nav-next {
            width: 40px;
            margin-left: 50px;
        }
    }
    @media screen and (max-width: 480px) {
        .mobile-navigation {
            height: 65px;
        }
        .icon-nav {
            width: 30px;
        }
        .icon-nav-portfolio {
            display: none;
        }
        .icon-nav-next {
            width: 30px;
            margin-left: 45px;
        }
        }
</style>