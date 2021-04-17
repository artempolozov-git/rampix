<template>
    <div>
        <div class="review-clients">
            <div class="user-logo"><img src="@/assets/icons/zinaidacosmomap.jpg"></div>
            <div class="user-form">
                <div class="user-name">
                    <div style="display: block">
                    <div class="name">Зинаида Полтинникова</div>
                    <div class="position"><a href="https://cosmomap.ru/">Инстаграм-магазин «Cosmomap»</a></div>
                    </div>
                    <!--<div class="date">21 сентября 16:20</div>-->
                </div>
                <div class="rating">
                    <div class="star"><img src="@/assets/icons/star.svg"></div>
                    <div class="star"><img src="@/assets/icons/star.svg"></div>
                    <div class="star"><img src="@/assets/icons/star.svg"></div>
                    <div class="star"><img src="@/assets/icons/star.svg"></div>
                    <div class="star"><img src="@/assets/icons/star.svg"></div>
                    <!--<div class="star-empty"><img src="@/assets/icons/emptystar.svg"></div>!-->
                </div>
                <div class="description-reviews">
                    <div class="dignity">
                        <div class="dignity-title">Достоинства:</div>
                        <div class="dignity-desc">Красивый дизайн сайта и техническая поддержка</div>
                    </div>
                    <div class="dignity">
                        <div class="dignity-title">Недостатки:</div>
                        <div class="dignity-desc">Их нет</div>
                    </div>
                    <div class="dignity">
                        <div class="dignity-title">Комментарий:</div>
                        <div class="dignity-comment">Спасибо команде Рампикс за такой красивый сайт и техническую поддержку!
                        Мне было сложно выбрать и решиться заказать сайт, потому что до этого я никогда с этим не сталкивалась.
                        Но мне помогли во всех вопросах! Разместили мой сайт у себя, рассказали про все технические моменты, помогли с настройкой сайта!
                        Все на высшем уровне! Большое спасибо!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FirstClient"
    }
</script>

<style scoped>
.review-clients {
    display: flex;
}
.user-logo > img {
    width: 70px;
    height: 70px;
    margin-right: 15px;
    border-radius: 7px;
}
.user-name {
    display: flex;
    align-items: flex-end;
    margin-bottom: 15px;
}
.name {
    font-size: 18px;
    color: #333333;
    font-weight: 500;
}
.position > a {
    text-decoration: none;
    color: #686868;
    font-size: 16px;
}
.date {
    margin-left: 15px;
    font-size: 16px;
    color: #686868;
}
.rating {
    display: flex;
}
.star {
    width: 25px;
    height: 25px;
}
.star-empty {
    width: 25px;
    height: 25px;
}
.dignity-title {
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    margin-top: 15px;
}
.dignity-desc {
    width: 100%;
    font-size: 16px;
    color: #686868;
    margin-top: 5px;
}
.dignity-comment {
    width: 80%;
    font-size: 16px;
    color: #686868;
    margin-top: 5px;
}
@media screen and (min-width: 1920px) {

}
@media screen and (max-width: 1024px) {
.dignity-desc {
    width: 100%;
}
.user-form {
    margin-bottom: 30px;
}
}
@media screen and (max-width: 600px) {
.name {
    font-size: 16px;
}
.position {
    font-size: 14px;
}
.dignity-title {
    font-size: 14px;
}
.dignity-desc {
    font-size: 14px;
}
.date {
    font-size: 14px;
}
.user-logo > img {
    width: 60px;
    height: 60px;
}
.star {
    width: 20px;
    height: 20px;
}
.star-empty {
    width: 20px;
    height: 20px;
}
}
@media screen and (max-width: 375px) {
    .name {
        font-size: 15px;
    }
    .user-logo {
        display: none;
    }
    .dignity-comment {
        font-size: 14px;
    }
}
</style>