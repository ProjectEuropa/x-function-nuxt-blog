<template>
    <div>
    <carousel-3d>
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
            <img src="@/assets/image/jone-po.png">
        </slide>
    </carousel-3d>
    </div>
</template>

<script>
import Carousel3d from 'vue-carousel-3d/src/Carousel3d.vue'
import Slide from 'vue-carousel-3d/src/Slide.vue'

export default {
  components: {
    Carousel3d,
    Slide
  }
}
</script>

