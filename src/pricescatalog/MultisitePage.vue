<template>
    <div class="background-block">
        <div class="multisite-page WOW animate__fadeInLeft" id="multipage-price">
            <multipage-start></multipage-start>
            <multipage></multipage>
            <multipage-profi></multipage-profi>
        </div>
    </div>
</template>

<script>
    import MultipageStart from "@/pricescatalog/MultipageStart";
    import Multipage from "@/pricescatalog/Multipage";
    import MultipageProfi from "@/pricescatalog/MultipageProfi";
    export default {
        name: "MultisitePage",
        components: {MultipageProfi, Multipage, MultipageStart}
    }
</script>

<style scoped>
.WOW {
    animation: fadeInLeft;
    animation-duration: 0.3s;
}
.background-block {
    background-color: #f6f6f6;
}
.multisite-page {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 15px;
    padding: 40px 330px;
}
@media screen and (max-width: 1800px) {
    .multisite-page {
        padding: 40px 230px;
    }
}
@media screen and (max-width: 1630px) {
    .multisite-page {
        padding: 40px 150px;
    }
}
@media screen and (max-width: 1450px) {
    .multisite-page {
        padding: 40px 70px;
    }
}
@media screen and (max-width: 1280px) {
    .multisite-page {
        padding: 40px 25px;
    }
}
@media screen and (max-width: 1140px) {
    .multisite-page {
        grid-template-columns: repeat(1, 1fr);
        padding: 40px 200px;
    }
}
@media screen and (max-width: 800px) {
    .multisite-page {
        padding: 40px 120px;
    }
}
@media screen and (max-width: 600px) {
    .multisite-page {
        padding: 40px 110px;
        grid-row-gap: 30px;
    }
}
@media screen and (max-width: 533px) {
    .multisite-page {
        padding: 40px 50px;
    }
}
@media screen and (max-width: 360px) {
    .multisite-page {
        padding: 40px 15px;
    }
}
</style>