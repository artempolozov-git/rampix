<template>
    <div class="portfolio-works">
        <div class="container">
            <a class="work" href="https://www.behance.net/gallery/109451805/Websites-veb-dizajn-i-razrabotka-sajta-UIUX-design" target="_blank"></a>
            <a class="back" href="https://www.behance.net/gallery/109451805/Websites-veb-dizajn-i-razrabotka-sajta-UIUX-design" target="_blank">Индивидуальный дизайн и разработка сайта для инстаграм-магазина «Cosmomap»</a>
        </div>
        <div class="container">
            <a class="work-two" href="https://www.behance.net/gallery/109437093/Landing-page-veb-dizajn-i-razrabotka-sajta-UIUX" target="_blank"></a>
            <a class="back" href="https://www.behance.net/gallery/109437093/Landing-page-veb-dizajn-i-razrabotka-sajta-UIUX" target="_blank">Индивидуальный дизайн и разработка Landing page для компании по услугам ландшафтного дизайна «Трес»</a>
        </div>
        <div class="container">
            <a class="work-three" href="https://www.behance.net/gallery/110191637/Lading-page-dlja-studii-veb-razrabotki-UXUI" target="_blank"></a>
            <a class="back" href="https://www.behance.net/gallery/110191637/Lading-page-dlja-studii-veb-razrabotki-UXUI" target="_blank">Дизайн и разработка Landing page для студии «Rampix.ru»</a>
        </div>
        <div class="container">
            <a class="work-four" href="https://www.behance.net/gallery/108974653/dizajn-glavnoj-stranicy-dlja-sajta-nedvizhimosti" target="_blank"></a>
            <a class="back" href="https://www.behance.net/gallery/108974653/dizajn-glavnoj-stranicy-dlja-sajta-nedvizhimosti" target="_blank">Дизайн главной страницы для сайта недвижимости «Realty-Slovakia»</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PortfolioWorks"
    }
</script>

<style scoped>
.portfolio-works {
    width: 50%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 7px;
    grid-row-gap: 7px;
}
.container {
    position: relative;
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
    padding: 30px;
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
.work {
    display: block;
    height: 246.5px;
    border-radius: 7px;
    overflow: hidden;
    background: url(../assets/images/cosmomap-site.webp);
    background-size: cover;
    background-position: center;
    transition: all .2s ease;
}
.work-two {
    display: block;
    height: 246.5px;
    border-radius: 7px;
    overflow: hidden;
    background: url(../assets/images/tres-site.webp);
    background-size: cover;
    background-position: center;
    transition: all .2s ease;
}
.work-three {
    display: block;
    height: 246.5px;
    border-radius: 7px;
    overflow: hidden;
    background: url(../assets/images/rampix.webp);
    background-size: cover;
    background-position: center;
    transition: all .2s ease;
}
.work-four {
    display: block;
    height: 246.5px;
    border-radius: 7px;
    overflow: hidden;
    background: url(../assets/images/slovakia.webp);
    background-size: cover;
    background-position: center;
    transition: all .2s ease;
}
@media screen and (max-width: 1440px) {
    .work {
        height: 246.5px;
    }
    .work-two {
        height: 246.5px;
    }
    .work-three {
        height: 246.5px;
    }
    .work-four {
        height: 246.5px;
    }
}
@media screen and (max-width: 1380px) {
    .work {
        height: 196.5px;
    }
    .work-two {
        height: 196.5px;
    }
    .work-three {
        height: 196.5px;
    }
    .work-four {
        height: 196.5px;
    }
}
@media screen and (max-width: 1024px) {
    .work {
        height: 158.5px;
    }
    .work-two {
        height: 158.5px;
    }
    .work-three {
        height: 158.5px;
    }
    .work-four {
        height: 158.5px;
    }
}
@media screen and (max-width: 1520px) {
    .portfolio-works {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
}
@media screen and (max-width: 1390px) {
    .portfolio-works {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }
}
@media screen and (max-width: 1280px) {
    .portfolio-works {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}
@media screen and (max-width: 920px) {
    .portfolio-works {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, 1fr);
        width: 100%;
    }
    .container:hover .back {
        display: none;
    }
    .container:hover {
        transform: none;
    }
}
@media screen and (max-width: 700px) {
    .portfolio-works {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}
@media screen and (max-width: 723px) {

}
</style>