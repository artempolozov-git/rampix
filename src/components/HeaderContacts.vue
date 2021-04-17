<template>
    <div class="contacts">
        <div class="contact">
            <a target="_blank" class="icon" title="Email" href="mailto:info@rampix.ru"><img src="@/assets/icons/email.svg"><span>info@rampix.ru</span></a>
        </div>
        <a target="_blank" class="icon-messenger" title="WhatsApp" href="https://api.whatsapp.com/send?phone=+79191650972&text=&source=&data=&app_absent="><img src="@/assets/icons/wa.svg"></a>
        <a target="_blank" class="icon-messenger" title="Telegram" href="https://t.me/rampixmanager"><img src="@/assets/icons/tg.svg"></a>
        <a target="_blank" class="icon-messenger" title="Behance" href="https://www.behance.net/rampix-studio"><img src="@/assets/icons/behance.svg"></a>
    </div>
</template>

<script>
    export default {
        name: "HeaderContacts"
    }
</script>

<style scoped>
.contacts {
    display: flex;
    align-items: center;
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
}
.icon-messenger {
    display: block;
    margin-left: 15px;
    width: 40px;
    transition: opacity .2s ease-in;
}
.icon-messenger:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease-in;
}
@media screen and (min-width: 1920px) {
    .icon-messenger {
        margin-left: 35px;
    }
}
@media screen and (min-width: 1440px) {
    .icon-messenger {
        margin-left: 25px;
    }
}
@media screen and (max-width: 1280px) {
    .contacts {
        display: none;
    }
}
</style>