<template>
    <div class="footer">
        <div class="footer-block">
            <footer-logo></footer-logo>
            <footer-links></footer-links>
        </div>
    </div>
</template>

<script>
    import FooterLogo from "@/components/FooterLogo";
    import FooterLinks from "@/components/FooterLinks";
    export default {
        name: "Footer",
        components: {FooterLinks, FooterLogo}
    }
</script>

<style scoped>
.footer {
    display: flex;
    padding: 40px 150px;
    border-top: 1px solid #dbdbdb;
}
.footer-block {
    display: flex;
    margin: auto;
}
@media screen and (min-width: 1920px) {
    .footer-block {
        margin: auto;
    }
}
@media screen and (max-width: 1370px) {
    .footer {
        padding: 50px 20px;
    }
}
@media screen and (max-width: 1290px) {
    .footer {
        padding: 50px 50px;
    }
}
@media screen and (max-width: 600px) {
    .footer {
        display: none;
    }
}
@media screen and (max-width: 375px) {
    .footer {
        padding: 40px 20px;
    }
}
</style>