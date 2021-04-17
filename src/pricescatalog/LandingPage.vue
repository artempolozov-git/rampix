<template>
    <div class="landing-background" id="landing-price">
        <div class="landing-page WOW animate__fadeInLeft">
            <landing-start></landing-start>
            <landing></landing>
            <landing-profi></landing-profi>
        </div>
    </div>
</template>

<script>
    import LandingStart from "@/pricescatalog/LandingStart";
    import Landing from "@/pricescatalog/Landing";
    import LandingProfi from "@/pricescatalog/LandingProfi";
    export default {
        name: "LandingPage",
        components: {LandingProfi, Landing, LandingStart}
    }
</script>

<style scoped>
.WOW {
    animation: fadeInLeft;
    animation-duration: 0.3s;
}
.landing-background {
    background-color: #f6f6f6;
    padding: 40px 330px;
}
.landing-page {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 15px;
}
@media screen and (max-width: 1800px) {
    .landing-background {
        padding: 40px 230px;
    }
}
@media screen and (max-width: 1630px) {
    .landing-background {
        padding: 40px 150px;
    }
}
@media screen and (max-width: 1450px) {
    .landing-background {
        padding: 40px 70px;
    }
}
@media screen and (max-width: 1280px) {
    .landing-background {
        padding: 40px 25px;
    }
}
@media screen and (max-width: 1140px) {
    .landing-page {
        grid-template-columns: repeat(1, 3fr);
    }
    .landing-background {
        padding: 40px 200px;
    }
}
@media screen and (max-width: 800px) {
    .landing-background {
        padding: 40px 120px;
    }
}
@media screen and (max-width: 600px) {
    .landing-background {
        padding: 40px 110px;
        grid-row-gap: 30px;
    }
}
@media screen and (max-width: 533px) {
    .landing-background {
        padding: 40px 50px;
    }
}
@media screen and (max-width: 360px) {
    .landing-background {
        padding: 40px 15px;
    }
}
</style>