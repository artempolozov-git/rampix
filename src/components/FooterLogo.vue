<template>
    <div class="footer-logo">
        <div class="logotype"><img src="@/assets/icons/rampix-logotype.svg"></div>
        <div class="send-button" @click="toggleForm">
            <span>Оставить заявку</span>
        </div>
        <div class="upbutton" v-scroll-to="'#top'" title="Наверх"><img src="@/assets/icons/upbutton.svg"></div>
    </div>
</template>

<script>
    export default {
        name: "FooterLogo",
        methods:{
            toggleForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
    }
</script>

<style scoped>
.footer-logo {
    display: table-cell;
    margin-right: 30px;
}
.logotype {
    width: 200px;
    margin-left: 7px;
    transition: opacity .2s ease-in;
}
.send-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    width: 160px;
    height: 45px;
    background-color: #1c89ea;
    border-radius: 7px;
    transition: opacity .2s ease-in;
}
.send-button:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease-in;
}
.send-button > span {
    color: white;
    font-weight: bold;
}
.send-button::selection {
    background: transparent;
}
.upbutton {
    display: flex;
    justify-content: center;
    width: 35px;
    margin-top: 35px;
    transition: opacity .2s ease-in;
}
.upbutton > img {
    width: 35px;
}
.upbutton:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease-in;
}
@media screen and (max-width: 1024px) {
    .send-button {
        margin-left: 0;
    }
}
@media screen and (max-width: 600px) {
    .logotype {
        width: 130px;
    }
    .send-button {
        width: 150px;
    }
    .send-button > span {
        font-size: 14px;
    }
    .upbutton > img {
        width: 45px;
        height: 45px;
    }
}
@media screen and (max-width: 375px) {
    .send-button {
        margin-top: 21px;
    }
}
</style>