<template>
    <section id="about-page">
        <h2>ABOUT US</h2>
        <div class="about-area">
          <div class="element">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            <h3>Expert of Carnage Heart</h3>
            <h4>All rounder and Expert of 36chip.</h4>
            <img src="@/assets/image/chip.jpeg">
            <p>Carnage Heart EXA was the most proud and kept official rating rank 1.&nbsp;</p>
          </div>
          <div class="element">
            <i class="fa fa-laptop" aria-hidden="true"></i>
            <h3>Web Engineer</h3>
            <h4>HTML5 CSS3 PHP Laravel JavaScript jQuery Vue.js2</h4>
            <img src="@/assets/image/web-engineer.jpeg">
            <p>Backend uses Laravel preference, frontend uses Vue.js2 preference.　&nbsp;</p>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  // asyncData(context) {
  //   return context.app.$storyapi
  //     .get("cdn/stories/about", {
  //       version: context.isDev ? 'draft' : 'published',
  //     })
  //     .then(res => {
  //       console.log(res.data);
  //       return {
  //         blok: res.data.story.content,
  //         title: res.data.story.content.title,
  //         content: res.data.story.content.content
  //       };
  //     });
  // },
  // mounted() {
  //   this.$storyblok.init();
  //   this.$storyblok.on("change", () => {
  //     location.reload(true);
  //   });
  // }
};
</script>

<style lang="scss" scoped>
#about-page {
  background-color: #f3f3f1;
  margin-top: 0px;
  padding-top: 30px;
  padding-bottom: 30px;
  h2 {
    text-align: center;
  }
  .about-area {
    display: flex;
    justify-content: space-evenly;
    .element {
      text-align: center;
      i {
        font-size: 5em;
        color: #fff;
        background-color: #000;
        border-radius: 100%;
        padding: 30px;
      }
    }
    img {
      border-radius: 5%;
      max-width: 75%;
      max-height: 75%;
    }
  }
}

@media (max-width: 669px) {
  #about-page {
    .about-area {
      display: block;
      .element {
        margin-bottom: 50px;
        i {
          font-size: 3em;
        }
      }
    }
  }
}
</style>

