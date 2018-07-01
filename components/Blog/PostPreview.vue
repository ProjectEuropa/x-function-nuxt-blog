<template>
    <nuxt-link
      :to="'/blog/' + id">
      <article class="post-preview">
        <div class="post-preview-thumbnail" :style="{backgroundImage: 'url(' + thumbnailImage + ')'}"></div>
        <div class="post-preview-content">
          <span v-for="tag in tags" :key="tag"><i class="fa fa-search" aria-hidden="true">{{tag}}</i></span>
          <h1>{{ title }}</h1>
          <p>{{ excerpt }}</p>
          <p><i class="fa fa-clock-o" aria-hidden="true"></i> {{ created }}</p>
        </div>
      </article>
    </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    created: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
#posts {
  a {
    text-decoration: none;
    color: black;
  }

  .post-preview {
    border-radius: 3px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
    width: 90%;
    height: 20rem;
    margin: 1rem;
  }

  .post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
  }

  .post-preview-content {
    text-align: center;
    padding: 1rem;
    color: #fff;
    background-color: #333333;
  }

  span {
    background-color: rgba(120, 248, 199, 0.842);
    margin: 0 5px;
    border-radius: 5%;
    color: #000;
  }

  @media (min-width: 35rem) {
    .post-preview {
      width: 25rem;
      margin: 1.6rem;
    }
  }
}
</style>
