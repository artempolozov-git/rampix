<template>
    <div>
    <div id="loadmore" style="display: none">
        <div class="four-works">
            <div class="container">
                <a rel="preload" class="work-folder" href="https://www.behance.net/gallery/109068201/sajt-dlja-magazina-stroitelnyh-materialov" target="_blank"></a>
                <a rel="preload" class="back" href="https://www.behance.net/gallery/109068201/sajt-dlja-magazina-stroitelnyh-materialov" target="_blank">Разработка сайта для интернет-магазина строительных материалов «ЦСК»</a>
            </div>
            <div class="container">
                <a rel="preload"  class="work-click" href="https://www.behance.net/gallery/94770043/logotip-dlja-volonterskogo-proekta-Volunteers-logotype" target="_blank"></a>
                <a rel="preload"  class="back" href="https://www.behance.net/gallery/94770043/logotip-dlja-volonterskogo-proekta-Volunteers-logotype" target="_blank">Логотип для волонтерского проекта «Volunteers&Business»</a>
            </div>
            <div class="container">
                <a rel="preload"  class="work-meat" href="https://www.behance.net/gallery/108884891/brendbuk-i-logotip-dlja-magazina-sportivnoj-odezhdy" target="_blank"></a>
                <a rel="preload"  class="back" href="https://www.behance.net/gallery/108884891/brendbuk-i-logotip-dlja-magazina-sportivnoj-odezhdy" target="_blank">Брендбук и логотип для магазина спортивной одежды «Lifestyle»</a>
            </div>
            <div class="container">
                <a rel="preload"  class="work-dreamstime" href="https://www.behance.net/gallery/108680239/rukovodstvo-i-logotip-dlja-mebelnogo-magazina" target="_blank"></a>
                <a rel="preload"  class="back" href="https://www.behance.net/gallery/108680239/rukovodstvo-i-logotip-dlja-mebelnogo-magazina" target="_blank">Руководство и дизайн логотипа для мебельного магазина «Сток мебель»</a>
            </div>
        </div>
    </div>
        <div style="display: flex; justify-content: center">
            <div class="loadmore-button" @click="toggleForm" onclick="style.display='none'">
                <span>Показать еще</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PortfolioPlusworks",
        methods:{
            toggleForm(){
                let form = document.getElementById("loadmore");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
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
    .work-folder {
        display: block;
        height: 246.5px;
        border-radius: 7px;
        overflow: hidden;
        background: url(../assets/images/csk.webp);
        background-size: cover;
        background-position: center;
        transition: all .2s ease;
    }
    .work-click {
        display: block;
        height: 246.5px;
        border-radius: 7px;
        overflow: hidden;
        background: url(../assets/images/vb.webp);
        background-size: cover;
        background-position: center;
        transition: all .2s ease;
    }
    .work-meat {
        display: block;
        height: 246.5px;
        border-radius: 7px;
        overflow: hidden;
        background: url(../assets/images/lifestyle.webp);
        background-size: cover;
        background-position: center;
        transition: all .2s ease;
    }
    .work-dreamstime {
        display: block;
        height: 246.5px;
        border-radius: 7px;
        overflow: hidden;
        background: url(../assets/images/stok-mebel.webp);
        background-size: cover;
        background-position: center;
        transition: all .2s ease;
    }
    .loadmore-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 25px;
        width: 160px;
        height: 45px;
        background-color: #1c89ea;
        border-radius: 7px;
        transition: opacity .2s ease-in;
    }
    .loadmore-button:hover {
        cursor: pointer;
        opacity: 0.8;
        transition: opacity .2s ease-in;
    }
    .loadmore-button > span {
        color: white;
        font-weight: bold;
    }
    @media screen and (max-width: 1380px) {
        .work-folder {
            height: 196.5px;
        }
        .work-click {
            height: 196.5px;
        }
        .work-meat {
            height: 196.5px;
        }
        .work-dreamstime {
            height: 196.5px;
        }
    }
    @media screen and (max-width: 1024px) {
        .work-folder {
            height: 158.5px;
        }
        .work-click {
            height: 158.5px;
        }
        .work-meat {
            height: 158.5px;
        }
        .work-dreamstime {
            height: 158.5px;
        }
    }
    @media screen and (max-width: 920px) {
        .four-works {
            grid-row-gap: 7px;
        }
    }
    @media screen and (max-width: 800px) {
        .work-folder {
            height: 130.5px;
        }
        .work-click {
            height: 130.5px;
        }
        .work-meat {
            height: 130.5px;
        }
        .work-dreamstime {
            height: 130.5px;
        }
        .loadmore-button {
            width: 150px;
        }
        .loadmore-button > span {
            font-size: 14px;
        }
        .container:hover .back {
            display: none;
        }
        .container:hover {
            transform: none;
        }
    }
    @media screen and (max-width: 700px) {
        .four-works {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
        .work-folder {
            height: 158.5px;
        }
        .work-click {
            height: 158.5px;
        }
        .work-meat {
            height: 158.5px;
        }
        .work-dreamstime {
            height: 158.5px;
        }
    }
    @media screen and (max-width: 360px) {
        .four-works {
            grid-template-columns: repeat(1, 1fr);
        }
        .work-folder {
            height: 158.5px;
        }
        .work-click {
            height: 158.5px;
        }
        .work-meat {
            height: 158.5px;
        }
        .work-dreamstime {
            height: 158.5px;
        }
    }
</style>