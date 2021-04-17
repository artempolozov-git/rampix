<template>
    <div id="prices-block">
        <div class="title-tabs">Выберите интересующий Вас сайт</div>

        <div id="app" data-aos="fade-up"
             data-aos-anchor-placement="top-bottom">

            <vue-tabs>
            <v-tab title="Сайт-визитка">
                <business-page></business-page>
            </v-tab>

            <v-tab class="title-active" title="Одностраничный сайт">
                <landing-page></landing-page>
            </v-tab>

            <v-tab title="Многостраничный сайт">
                <multisite-page></multisite-page>
            </v-tab>

        </vue-tabs>
        </div>

    </div>
</template>

<script>
    import {VueTabs, VTab} from 'vue-nav-tabs'
    import BusinessPage from "@/pricescatalog/BusinessPage";
    import LandingPage from "@/pricescatalog/LandingPage";
    import MultisitePage from "@/pricescatalog/MultisitePage";
    export default {
        name: "PriceTabs",
        components: {
            MultisitePage,
            LandingPage,
            BusinessPage,
            VueTabs,
            VTab,
        },
    }
</script>

<style>
.tabs__link  {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}
.nav-tabs-navigation {
    display: flex;
    justify-content: center;
}
.vue-tabs .nav-tabs > li.active > a, .vue-tabs .nav-tabs > li.active > a:hover, .vue-tabs .nav-tabs > li.active > a:focus {
    color: #686868;
}
.vue-tabs .tabs__link {
    color: white;
}
.vue-tabs .nav-tabs {
    border-bottom: 0;
}
.vue-tabs .nav-tabs > li.active > a, .vue-tabs .nav-tabs > li.active > a:hover, .vue-tabs .nav-tabs > li.active > a:focus {
    background-color: #f6f6f6;
    border: 0;
}
.vue-tabs .nav-tabs > li > a {
    background-color: #1c89ea;
    margin-right: 10px;
    border: 0;
}
.vue-tabs .nav > li > a:hover, .vue-tabs .nav > li > a:focus {
    background-color: rgba(5, 123, 233, 0.81);
}
.title-tabs {
    margin-bottom: 30px;
    font-size: 23px;
    font-weight: bold;
    color: #333333;
    text-align: center;
}
@media screen and (max-width: 1024px) {
    .top-block {
        height: 50px;
    }
}
@media screen and (max-width: 600px) {
    .title-tabs {
        font-size: 18px;
    }
    .tabs__link {
        font-size: 16px;
    }
    .vue-tabs .nav-tabs
    {
        display: flex;
    }
    .vue-tabs .nav-tabs > li > a {
        margin-right: 5px;
    }
}
@media screen and (max-width: 360px) {
    .title-tabs {
        font-size: 16px;
    }
    .tabs__link {
        font-size: 14px;
    }
    .tabs__link {
        font-size: 13px;
    }
    .vue-tabs .nav > li > a {
        padding: 10px 7px;
    }
    .vue-tabs .nav-tabs > li > a {
        margin-right: 2px;
    }
}
</style>