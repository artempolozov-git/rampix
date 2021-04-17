<template>
<div>
    <div class="action-bar" id="action">
        <span>Бесплатное размещение сайта на хостинге REG.RU + дополнительная скидка на разработку сайта! 🔥</span>
        <div class="button-close">
            <span title="Закрыть" style="font-family: 'GoogleSans'" class="closebtn" @click="toggleAction">&times;</span>
        </div>
    </div>
    <div class="header" id="top">
        <header-logo></header-logo>
        <header-links></header-links>
        <header-contacts></header-contacts>
        <div class="burgerbutton">
            <burger-menu></burger-menu>
        </div>
     </div>
</div>
 </template>

 <script>
     import HeaderLinks from "@/components/HeaderLinks";
     import HeaderLogo from "@/components/HeaderLogo";
     import HeaderContacts from "@/components/HeaderContacts";
     import BurgerMenu from "@/components/Burger-menu";
     export default {
         name: "Header",
         components: {BurgerMenu, HeaderContacts, HeaderLogo, HeaderLinks},
         methods: {
             toggleAction(){
                 var form = document.getElementById("action");
                 form.style.display = (form.style.display == 'none') ? 'block' : 'none'
             }
         },
     }
 </script>

 <style scoped>
 .action-bar {
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     height: auto;
     padding: 15px 0;
     background-color: #1c89ea;
 }
 .action-bar > span {
     text-align: center;
     font-size: 18px;
   width: 70%;
     color: white;
     font-weight: normal;
 }
 .closebtn {
     margin-left: 10px;
     color: white;
     font-weight: normal;
     font-size: 40px;
     line-height: 24px;
     cursor: pointer;
     transition: 0.3s;
 }
 .closebtn:hover {
     color: rgba(255, 255, 255, 0.7);
     transition: 0.3s;
 }
 .closebtn::selection {
     outline: none;
     background: transparent;
 }
 .header {
     display: flex;
     align-items: center;
     padding: 30px 200px;
     border-bottom: 1px solid #dbdbdb;
 }
 .burgerbutton {
     display: none;
 }
 .button-close {
     transition: 0.3s;
     position: absolute;
     z-index: 100;
     right: 30px;
     top: 10px;
 }
 @media screen and (max-width: 1800px) {
     .header {
         padding: 30px 100px;
     }
 }
 @media screen and (max-width: 1536px) {
     .header {
         padding: 30px 50px;
     }
 }
 @media screen and (max-width: 1370px) {
     .header {
         padding: 30px 30px;
     }
 }
 @media screen and (max-width: 1280px) {
     .action-bar {
         display: none;
     }
     .burgerbutton {
       display: block;
     }
 }
 @media screen and (max-width: 723px) {
     .header {
         padding: 20px 20px;
     }
     .action-bar > span {
         width: 65%;
         font-size: 14px;
         font-weight: normal;
     }
 }
 </style>