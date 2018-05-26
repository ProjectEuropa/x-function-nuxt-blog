<template>
    <section id="about-page">
        <h2>ABOUT US</h2>
        <div class="about-area">
          <div class="element">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            <h3>Expert of Carnage Heart</h3>
            <p>Carnage Heart was the most proud and kept official rating rank 1.</p>
          </div>
          <div class="element">
            <i class="fa fa-laptop" aria-hidden="true"></i>
            <h3>Web Engineer</h3>
            <p>PHP framework Laravel is good area, frontend uses Vue.js2 preference.</p>
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
  }
}

// #about-page p {
//   white-space: pre-line;
// }
</style>

