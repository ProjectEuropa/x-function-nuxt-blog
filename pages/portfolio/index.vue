<template>
    <div>
        <carousel-3d :autoplay="true">
            <slide :index="0">
                <img src="@/assets/image/europa-po.png">
            </slide>
            <slide :index="1">
                <img src="@/assets/image/CarnageHeartEXAM-po.png">
            </slide>
            <slide :index="2">
                <img src="@/assets/image/sass-practice-po.png">
            </slide>
            <slide :index="3">
                <img src="@/assets/image/X-FUNCTION-po.png">
            </slide>
            <slide :index="4">
                <img src="@/assets/image/Qiita-po.png">
            </slide>
        </carousel-3d>
        
        <section class="">
            <div class="portfolio-area">
                <a href="https://project-europa.herokuapp.com/" target="_blank"><img src="@/assets/image/europa-po.png" class="image"></a>
                <p class="description"><span class="title">Europa</span> <br>
                    PSP用のカルネージハートエクサ専用のファイルアップローダー<br>
                PHP7.2 + Laravel5.5 + Vue.js2 + Bootstrap4 + Herokuで作成・公開
                </p>
            </div>
            <div class="portfolio-area">
                <a href="http://exams.php.xdomain.jp/" target="_blank"><img src="@/assets/image/CarnageHeartEXAM-po.png" class="image"></a>
                <p class="description"><span class="title">Carnage Heart EXAM</span><br>
                PHP7 + Laravel5.4 + Bootstrap3 + Vue.js2で作成したクイズアプリ
                </p>
            </div>
            <div class="portfolio-area">
                <a href="https://projecteuropa.github.io/Sass-practice/" target="_blank"><img src="@/assets/image/sass-practice-po.png" class="image"></a>
                <p class="description"><span class="title">Sass Practice</span><br>
                    Sassの課題用として作成したWEBサイト。Bootstrap4を使用。
                </p>
            </div>
            <div class="portfolio-area">
                <a href="https://x-function.arukascloud.io/" target="_blank"><img src="@/assets/image/X-FUNCTION-po.png" class="image"></a>
                <p class="description"><span class="title">X-FUNCTION</span><br>
                    カルネージハート風ゲーム「X-FUNCTION」のWEB宣伝ページ。 <br> Nuxt.jsを使用。
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import Carousel3d from 'vue-carousel-3d/src/Carousel3d.vue'
import Slide from 'vue-carousel-3d/src/Slide.vue'

export default {
  components: {
    Carousel3d,
    Slide,
  },
}
</script>


<style lang="scss" scoped>
.portfolio-area {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 3px solid #1a1a1a;
    background-color: #1a1a1a;
    margin-bottom: 20px;
    width: 785px;
    // &::after {
    //     content:"";
    //     display: block;
    //     width:30%;
    // }
    .image {
        max-width: 300px;
    }
    .description {
        color: #ffffff;
        span.title {
            font-size: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
@media (max-width: 669px) {
    .portfolio-area {
        display: flex;
        flex-direction: column;
        width: 300px;
        .description {
            font-size: 0.5em;
            span.title {
                font-size: 1em;
            }
        }
    }
}
</style>
