<template>
    <div class="background-block">
        <div class="business-page WOW animate__fadeInLeft" id="business-price">
            <business-start></business-start>
            <business></business>
            <business-profi></business-profi>
        </div>
    </div>
</template>

<script>
    import BusinessStart from "@/pricescatalog/BusinessStart";
    import Business from "@/pricescatalog/Business";
    import BusinessProfi from "@/pricescatalog/BusinessProfi";
    export default {
        name: "BusinessPage",
        components: {BusinessProfi, Business, BusinessStart}
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
.business-page {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 15px;
    padding: 40px 330px;
}
@media screen and (max-width: 1800px) {
    .business-page {
        padding: 40px 230px;
    }
}
@media screen and (max-width: 1630px) {
    .business-page {
        padding: 40px 150px;
    }
}
@media screen and (max-width: 1450px) {
    .business-page {
        padding: 40px 70px;
    }
}
@media screen and (max-width: 1280px) {
    .business-page {
        padding: 40px 25px;
    }
}
@media screen and (max-width: 1140px) {
    .business-page{
        grid-template-columns: repeat(1, 3fr);
        padding: 40px 200px;
    }
}
@media screen and (max-width: 800px) {
    .business-page{
        padding: 40px 120px;
    }
}
@media screen and (max-width: 600px) {
    .business-page{
        padding: 40px 100px;
        grid-row-gap: 30px;
    }
}
@media screen and (max-width: 533px) {
    .business-page {
        padding: 40px 50px;
    }
}
@media screen and (max-width: 360px) {
    .business-page {
        padding: 40px 15px;
    }
}
</style>