<template>
    <div>
        <div class="first-screen">
            <home-description></home-description>
            <home-developer></home-developer>
        </div>
        <home-advantages></home-advantages>
        <home-comparison></home-comparison>
        <home-services></home-services>
        <home-offer></home-offer>
        <home-man-offer></home-man-offer>
        <home-portfolio></home-portfolio>
        <home-analytics-offer></home-analytics-offer>
        <price-tabs></price-tabs>
        <home-review></home-review>
        <home-contacts></home-contacts>
    </div>
</template>

<script>
    import HomeDescription from "@/components/HomeDescription";
    import HomeDeveloper from "@/components/HomeDeveloper";
    import HomeAdvantages from "@/components/HomeAdvantages";
    import HomeComparison from "@/components/HomeComparison";
    import HomeServices from "@/components/HomeServices";
    import HomeOffer from "@/components/HomeOffer";
    import HomePortfolio from "@/components/HomePortfolio";
    import HomeContacts from "@/components/HomeContacts";
    import HomeReview from "@/components/HomeReview";
    import HomeManOffer from "@/components/HomeManOffer";
    import HomeAnalyticsOffer from "@/components/HomeAnalyticsOffer";
    import PriceTabs from "@/components/PriceTabs";
    export default {
        name: "Home",
        components: {
            PriceTabs,
            HomeAnalyticsOffer,
            HomeManOffer,
            HomeReview,
            HomeContacts,
            HomePortfolio,
            HomeOffer, HomeServices, HomeComparison, HomeAdvantages, HomeDeveloper, HomeDescription}
    };

</script>

<style scoped>
.first-screen {
    display: flex;
    align-items: center;
    padding: 40px 300px;
}
@media only screen and (max-width : 1680px) {
    .first-screen {
        padding: 40px 200px;
    }
}
@media only screen and (max-width : 1536px) {
    .first-screen {
        padding: 30px 100px;
    }
}
@media screen and (max-width: 1024px) {
    .first-screen {
        display: block;
    }
}
@media screen and (max-width: 723px) {
    .first-screen {
        padding: 40px 40px;
    }
}
@media screen and (max-width: 450px) {
    .first-screen {
        padding: 40px 25px;
    }
}
@media screen and (max-width: 375px) {
    .first-screen {
        padding: 30px 20px;
    }
}
</style>