<template>
<div>
    <div style="height: 70px" id="portfolio-block"></div>
    <div class="portfolio-wrapper">
        <div class="title">Ознакомьтесь с нашим портфолио</div>
        <div data-aos="fade-up"
             data-aos-anchor-placement="top-bottom">
            <div class="works">
                <div class="container">
                    <a class="main-block" href="https://www.behance.net/gallery/116596921/veb-dizajn-i-razrabotka-Landing-page-UXUI-Design" target="_blank"></a>
                    <a class="back" href="https://www.behance.net/gallery/116596921/veb-dizajn-i-razrabotka-Landing-page-UXUI-Design" target="_blank">Веб-дизайн и разработка Landing page под ключ <br>для туристической компании «VerhoTour»</a>
                </div>
                <portfolio-works></portfolio-works>
            </div>
            <portfolio-four-works></portfolio-four-works>
            <portfolio-plusworks></portfolio-plusworks>
        </div>
    </div>
</div>
</template>

<script>
    import PortfolioWorks from "@/components/PortfolioWorks";
    import PortfolioFourWorks from "@/components/PortfolioFourWorks";
    import PortfolioPlusworks from "@/components/PortfolioPlusworks";
    export default {
        name: "HomePortfolio",
        components: {PortfolioPlusworks, PortfolioFourWorks, PortfolioWorks},
    }
</script>

<style scoped>
.portfolio-wrapper {
    padding: 0px 200px 0px 200px;
    background: url(../assets/icons/backportfolio.svg);
    background-size: cover;
    background-position: right;
}
.title {
    margin-bottom: 40px;
    font-size: 23px;
    font-weight: bold;
    color: #333333;
    text-align: center;
}
.works {
    display: flex;
    align-items: center;
}
.container {
    position: relative;
    width: 50%;
    margin-right: 7px;
}
.back {
    text-align: center;
    font-size: 16px;
    font-family: GoogleSans;
    font-weight: 500;
    color: white;
    text-decoration: none;
    position: absolute;
    left:0;
    bottom:0;
    right:0;
    top:0;
    padding: 70px;
    display:none;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%);
    border-radius: 7px;
}
.container:hover .back {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.container:hover {
    transition: all .2s ease;
    transform: scale(1.01);
}
.main-block {
    display: block;
    height: 500px;
    border-radius: 7px;
    overflow: hidden;
    background: url(../assets/images/verhotour-site.webp);
    background-size: cover;
    background-position: left;
}
@media screen and (max-width: 1800px) {
    .portfolio-wrapper {
        padding: 0px 100px 0px 100px;
    }
}
@media screen and (max-width: 1536px) {
    .portfolio-wrapper {
        padding: 0px 80px 0px 80px;
    }
    .main-block {
        height: 500px;
    }
}
@media screen and (max-width: 1380px) {
    .portfolio-wrapper {
        padding: 0px 70px 0px 70px;
    }
    .main-block {
        height: 400px;
    }
}
@media screen and (max-width: 1280px) {
    .portfolio-wrapper {
        padding: 0px 50px 0px 50px;
    }
    .main-block {
        height: 400px;
    }
}
@media screen and (max-width: 1024px) {
    .main-block {
        height: 324px;
    }
}
@media screen and (max-width: 920px) {
    .works {
        display: block;
    }
    .container {
        width: 100%;
        margin-right: 0;
        margin-bottom: 7px;
    }
}
@media screen and (max-width: 800px) {
    .portfolio-wrapper {
        padding: 0px 70px 0px 70px;
    }
    .container:hover .back {
        display: none;
    }
    .container:hover {
        transform: none;
    }
}
@media screen and (max-width: 723px) {
    .portfolio-wrapper {
        padding: 0px 40px 0px 40px;
    }
}
@media screen and (max-width: 600px) {
    .title {
        font-size: 18px;
    }
    .main-block {
        height: 330px;
    }
}
@media screen and (max-width: 450px) {
    .main-block {
        height: 270px;
    }
}
@media screen and (max-width: 375px) {
    .title {
        font-size: 16px;
    }
    .portfolio-wrapper {
        padding: 0px 20px 0px 20px;
    }
}
</style>