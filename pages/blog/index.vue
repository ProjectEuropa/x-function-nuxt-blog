<template>
  <div>
    <section id="posts">
      <post-preview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
      :id="post.id"
      :created="post.created"
      />
    </section>
    <loading :active.sync="isLoading" :can-cancel="false"></loading>
    <nav style="color:red;" class="pagination">
      <ul class="page-numbers" v-if="pageData.totalPageCount">
        <li v-for="index in pageData.totalPageCount" :key="index" @click="loadpage(index)">
          <nuxt-link :to="{ path: '/blog', query: { page: index } }">{{ index }}</nuxt-link>
          <!-- <span v-else>{{ num }}</span> -->
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";
import moment from "moment";
import axios from "axios";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';


export default {
  components: {
    PostPreview,
    moment,
    axios,
    Loading
  },
  data() {
		return {
      isLoading: false,
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get(`cdn/stories?per_page=6`, {
        version: context.isDev ? "draft" : "published",
        starts_with: "blog/"
      })
      .then(res => {
        return {
          posts: res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.summary,
              thumbnailUrl: bp.content.thumbnail,
              created: moment(bp.created_at).format("YYYY/MM/DD HH:mm")
            };
          }),
          pageData: {
            totalPostsCount: res.total,
            totalPageCount: Math.ceil(res.total / 6)
          }
        };
      });
  },
  methods: {
    loadpage: function(index) {
      this.isLoading = true;
      axios
        .get(
          "https://api.storyblok.com/v1/cdn/stories?version=published&token=EBSXrBcxkgTqckTrol95FQtt&starts_with=blog&cv=" +
            Math.floor(Date.now() / 1e3) +
            "&per_page=6&page=" +
            index
        )
        .then(res => {
          const posts = res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.summary,
              thumbnailUrl: bp.content.thumbnail,
              created: moment(bp.created_at).format("YYYY/MM/DD HH:mm")
            };
          });
          this.posts = posts;
          this.isLoading = false;
        });
    }
  }
};
</script>

<style>
#posts {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}
@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>

<style lang="scss" scoped>
.pagination {
  ul {
    display: flex;
    flex-flow: row;
    justify-content: center;
    li {
      list-style: none;
      a {
        color: #fff;
        text-decoration: none;
        padding: 8px 16px;
        background-color: rgb(100, 100, 100);
      }
    }
  }
}
</style>

