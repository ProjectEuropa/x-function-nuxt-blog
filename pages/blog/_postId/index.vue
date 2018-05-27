<template>
  <div id="post">
      <section class="blog-area">
        <h2>{{ title }}</h2>
        <img :src="image">
        <p>{{ content }}</p>
      </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/blog/" + context.params.postId, {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        return {
          blok: res.data.story.content,
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          content: res.data.story.content.content
        };
      });
  },
  mounted() {
    this.$storyblok.init();
    this.$storyblok.on("change", () => {
      location.reload(true);
    });
  }
};
</script>

<style>
</style>


<style lang="scss" scoped>
#post {
  padding-top: 2rem;
  width: 50%;
  margin: 0 auto;
  .blog-area {
    border: solid 0.4px #3e3e3e;
    background-color: #333333;
    padding: 10px 10px;
    margin-bottom: 2rem;
    h2 {
      color: #fff;
    }
    img {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
    }
    p {
      color: #fff;
    }
  }
  .post-thumbnail {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
  }

  #post-content {
    width: 80%;
    max-width: 500px;
    margin: auto;
    margin-left: 20px;
  }
}
</style>

