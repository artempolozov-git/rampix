<template>
    <div class="four-works">
        <div class="container">
            <a class="work-presentation" href="https://www.behance.net/gallery/112095707/Tourism-logo-VerhoTour-avtorskie-kvest-tury" target="_blank"></a>
            <a class="back" href="https://www.behance.net/gallery/112095707/Tourism-logo-VerhoTour-avtorskie-kvest-tury" target="_blank">Дизайн логотипа для туристической компании «VerhoTour»</a>
        </div>
        <div class="container">
            <a class="work-behance" href="https://www.behance.net/gallery/109236855/dizajn-i-razrabotka-sajta-dlja-stroitelnoj-organizacii" target="_blank"></a>
            <a class="back" href="https://www.behance.net/gallery/109236855/dizajn-i-razrabotka-sajta-dlja-stroitelnoj-organizacii" target="_blank">Дизайн и разработка многостраничного сайта для строительной организации «ЗАБОР-РЕГИОН»</a>
        </div>
        <div class="container">
            <a class="work-cosmomap" href="https://www.behance.net/gallery/108966039/dizajn-logotipa-dlja-internet-magazina-Cosmomap" target="_blank"></a>
            <a class="back" href="https://www.behance.net/gallery/108966039/dizajn-logotipa-dlja-internet-magazina-Cosmomap" target="_blank">Дизайн логотипа для инстаграм-магазина «Cosmomap»</a>
        </div>
        <div class="container">
            <a class="work-rebranding" href="https://www.behance.net/gallery/108897951/rebrending-logotipa-dlja-studii-landshaftnogo-dizajna" target="_blank"></a>
            <a class="back" href="https://www.behance.net/gallery/108897951/rebrending-logotipa-dlja-studii-landshaftnogo-dizajna" target="_blank">Ребрендинг логотипа для компании «Трес»</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PortfolioFourWorks"
    }
</script>

<style scoped>
.four-works {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 7px;
    margin-top: 7px;
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
.work-behance {
    display: block;
    height: 246.5px;
    border-radius: 7px;
    overflow: hidden;
    background: url(../assets/images/zabor-region.webp);
    background-size: cover;
    background-position: center;
    transition: all .2s ease;
}

.work-cosmomap {
    display: block;
    height: 246.5px;
    border-radius: 7px;
    overflow: hidden;
    background: url(../assets/images/cosmomap-logotype.webp);
    background-size: cover;
    background-position: center;
    transition: all .2s ease;
}
.work-presentation {
    display: block;
    height: 246.5px;
    border-radius: 7px;
    overflow: hidden;
    background: url(../assets/images/verhotour.webp);
    background-size: cover;
    background-position: center;
    transition: all .2s ease;
}
.work-rebranding {
    display: block;
    height: 246.5px;
    border-radius: 7px;
    overflow: hidden;
    background: url(../assets/images/tres-rebranding.webp);
    background-size: cover;
    background-position: center;
    transition: all .2s ease;
}
@media screen and (max-width: 1380px) {
    .work-behance {
        height: 196.5px;
    }
    .work-cosmomap {
        height: 196.5px;
    }
    .work-presentation {
        height: 196.5px;
    }
    .work-rebranding {
        height: 196.5px;
    }
}
@media screen and (max-width: 1024px) {
    .work-behance {
        height: 158.5px;
    }
    .work-cosmomap {
        height: 158.5px;
    }
    .work-presentation {
        height: 158.5px;
    }
    .work-rebranding {
        height: 158.5px;
    }
}
@media screen and (max-width: 920px) {
    .four-works {
        grid-row-gap: 7px;
    }
}
@media screen and (max-width: 800px) {
    .work-behance {
        height: 130.5px;
    }
    .work-cosmomap {
        height: 130.5px;
    }
    .work-presentation {
        height: 130.5px;
    }
    .work-rebranding {
        height: 130.5px;
    }
    .container:hover .back {
        display: none;
    }
    .container:hover {
        transform: none;
    }
}
@media screen and (max-width: 700px) {
    .work-behance {
        height: 158.5px;
    }
    .work-cosmomap {
        height: 158.5px;
    }
    .work-presentation {
        height: 158.5px;
    }
    .work-rebranding {
        height: 158.5px;
    }
    .four-works {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}
@media screen and (max-width: 360px) {
    .four-works {
        grid-template-columns: repeat(1, 1fr);
    }
    .work-behance {
        height: 158.5px;
    }
    .work-cosmomap {
        height: 158.5px;
    }
    .work-presentation {
        height: 158.5px;
    }
    .work-rebranding {
        height: 158.5px;
    }
}
</style>