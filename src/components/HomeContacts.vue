<template>
<div>
    <div style="height: 80px" id="contacts-block"></div>
    <div class="home-contacts">
        <div class="title-contacts">Свяжитесь с нами удобным для Вас способом</div>
        <div data-aos="fade-up"
             data-aos-anchor-placement="top-bottom">
            <h2 class="desc-contacts">Мы поможем сориентироваться в необходимости того или иного выбора,
                а также обеспечим всей необходимой информацией для начала работы.</h2>
            <div class="contacts">
                <div class="contact">
                    <a target="_blank" class="icon" title="Email" href="mailto:info@rampix.ru"><img src="@/assets/icons/email.svg"><span>info@rampix.ru</span></a>
                </div>
                <div class="contact">
                    <a target="_blank" class="messengers" title="WhatsApp" href="https://api.whatsapp.com/send?phone=+79191650972&text=&source=&data=&app_absent="><img src="@/assets/icons/wa.svg"><span>WhatsApp</span></a>
                </div>
                <div class="contact">
                    <a target="_blank" class="messengers" title="Telegram" href="https://t.me/artempolozovtg"><img src="@/assets/icons/tg.svg"><span>Telegram</span></a>
                </div>
                <div class="contact">
                    <a target="_blank" class="messengers" title="Behance" href="https://www.behance.net/artempolozov-beh"><img src="@/assets/icons/behance.svg"><span>Behance</span></a>
                </div>
            </div>
            <home-feedback></home-feedback>
        </div>
    </div>
</div>
</template>

<script>
    import HomeFeedback from "@/components/HomeFeedback";
    export default {
        name: "HomeContacts",
        components: {HomeFeedback}
    }
</script>

<style scoped>
    .home-contacts {
        padding-bottom: 70px;
        background: url(../assets/icons/backcontact.svg);
        background-size: cover;
        background-position: left;
    }
    .title-contacts {
        margin-bottom: 15px;
        font-size: 23px;
        font-weight: bold;
        color: #333333;
        text-align: center;
    }
    .desc-contacts {
        width: 40%;
        margin: auto;
        font-size: 16px;
        font-weight: normal;
        color: #686868;
        text-align: center;
    }
    .contacts {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
    }
    .contact {
        display: flex;
        align-items: center;
        transition: opacity .2s ease-in;
    }
    .icon {
        display: flex;
        align-items: center;
        text-decoration:none;
    }
    .icon > img {
        width: 40px;
        transition: opacity .2s ease-in;
    }
    .icon > span {
        font-size: 16px;
        color: #686868;
        margin-left: 5px;
        font-weight: normal;
    }
    .contact:hover {
        cursor: pointer;
        opacity: 0.8;
        transition: opacity .2s ease-in;
    }
    .contact > span {
        font-size: 16px;
        color: #686868;
        margin-left: 5px;
        font-weight: 500;
    }
    .messengers {
        display: flex;
        align-items: center;
        text-decoration:none;
    }
    .messengers > img {
        margin-left: 25px;
        width: 40px;
        transition: opacity .2s ease-in;
    }
    .messengers > span {
        font-size: 16px;
        color: #686868;
        margin-left: 5px;
        font-weight: normal;
    }
    @media screen and (max-width: 1680px) {
        .home-contacts > h2 {
            width: 40%;
        }
    }
    @media screen and (max-width: 1440px) {
        .desc-contacts {
            width: 50%;
        }
    }
    @media screen and (max-width: 1024px) {
        .desc-contacts {
            width: 60%;
        }
        .home-contacts {
            background-position: inherit;
        }
    }
    @media screen and (max-width: 800px) {
        .contacts {
            margin-top: 30px;
        }
        .messengers > span {
            display: none;
        }
        .messengers > img {
            width: 55px;
            height: 55px;
        }
        .icon > span {
            display: none;
        }
        .icon > img {
            width: 55px;
            height: 55px;
        }
    }
    @media screen and (max-width: 600px) {
        .title-contacts {
            font-size: 18px;
            width: 80%;
            margin: auto;
            margin-bottom: 20px;
        }
        .desc-contacts {
            font-size: 14px;
        }
        .messengers > img {
            width: 45px;
            height: 45px;
        }
        .icon > img {
            width: 45px;
            height: 45px;
        }
    }
    @media screen and (max-width: 360px) {
        .title-contacts {
            width: 80%;
            margin: auto;
            margin-bottom: 20px;
        }
        .desc-contacts {
            width: 80%;
        }
    }
</style>