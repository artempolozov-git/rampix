<template>
    <div class="advantages">
        <div class="advantage">
            <div class="first-icon"><img src="@/assets/icons/horse.svg"></div>
            <span class="icon-text">Индивидуальный подход<br>к каждому клиенту</span>
        </div>
        <div class="advantage">
            <div class="icon"><img src="@/assets/icons/time.svg"></div>
            <span class="icon-text">Выполнение проекта в<br>установленный срок</span>
        </div>
        <div class="advantage">
            <div class="icon"><img src="@/assets/icons/man.svg"></div>
            <span class="icon-text">Работа напрямую<br>с исполнителем</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeAdvantages"
    }
</script>

<style scoped>
.advantages {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
}
.advantage {
    display: flex;
    align-items: center;
}
.first-icon {
    width: 70px;
    margin-right: 15px;
}
.icon {
    width: 70px;
    margin-right: 15px;
    margin-left: 40px;
}
.icon-text {
    font-size: 16px;
    color: #686868;
}
@media screen and (min-width: 1920px) {
    .icon {
        margin-left: 80px;
    }
}
@media screen and (min-width: 1440px) {
    .icon {
        margin-left: 80px;
    }
}
@media screen and (max-width: 960px) {
    .advantages {
        display: none;
    }
}
</style>