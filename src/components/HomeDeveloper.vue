<template>
    <div class="developer" v-tilt><img src="@/assets/icons/developer.svg"></div>
</template>

<script>
    export default {
        name: "HomeDeveloper",
    }
</script>

<style scoped>
.developer > img {
    width: 450px;
    height: 450px;
}
@media only screen and (max-width : 1366px) {
    .developer > img {
        width: 400px;
        height: 400px;
    }
}
@media only screen and (max-width : 1280px) {
    .developer > img {
        width: 350px;
        height: 350px;
    }
}
@media screen and (max-width: 1024px) {
    .developer {
        display: flex;
        justify-content: center;

    }
}
</style>