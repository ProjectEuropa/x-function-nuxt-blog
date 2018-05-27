<template>
  <section id="posts">
    <post-preview
     v-for="post in posts"
     :key="post.id"
     :title="post.title"
     :excerpt="post.previewText"
     :thumbnailImage="post.thumbnailUrl"
     :id="post.id"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";

export default {
  components: {
    PostPreview
  },
  asyncData (context) {
    return context.app.$storyapi
    .get('cdn/stories', {
      version: context.isDev ? 'draft' : 'published',
      starts_with: 'blog/'
    }).then(res => {
      return {
        posts: res.data.stories.map(bp => {
          return {
            id: bp.slug,
            title: bp.content.title,
            previewText: bp.content.summary,
            thumbnailUrl: bp.content.thumbnail
          };
        })
      };
    })
  }
}
</script>

<style>
  #posts {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 35rem) {
    #posts {
      flex-direction: row;
    }
  }

</style>
