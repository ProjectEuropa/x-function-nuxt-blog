<template>
  <div id="post">
      <section class="blog-area">
        <h2>{{ title }}</h2>
        <img :src="image">
        <vue-markdown :source="source" class="markdown-body">{{ content }}</vue-markdown>
      </section>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      source: "red"
    };
  },
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

// global
<style>
pre {
  background-color: #000;
}
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
    .markdown-body {
       color: #fff;
      p a {
        color: aquamarine;
        text-decoration: none;
      }
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

