<template>
    <header class="main-header">
        <h1>Blog</h1>
        <hr>
        <nav class="main-nav">
            <ul class="nav-links">
                <nuxt-link to="/" tag="li" class="nav-link"><a>Home</a></nuxt-link>
                <nuxt-link to="/blog" tag="li" class="nav-link"><a>All Posts</a></nuxt-link>
                <nuxt-link to="/about" tag="li" class="nav-link"><a>About</a></nuxt-link>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
  padding-top: 1px;
  color: #000;
  background: #1a1a1a;
  hr {
    width: 70%;
  }
  h1 {
    text-align: center;
    width: 100px;
    height: 100px;
    margin: auto;
    margin-top: 25px;
    padding-top: 25px;
    background-color: #fff;
    border-radius: 100%;
  }
  // .main-header {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   background: #022d30;
  //   height: 20rem;
  // }
}

.main-nav {
  height: 100%;
}
.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
}

.nav-link {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 0.3rem;
  a {
    display: block;
    text-decoration: none;
    color: #fff;
    &:hover,
    &:active {
      color: #06c4d1;
    }
  }
  &.nuxt-link-exact-active {
    border-bottom: 3px solid #06c4d1;
    a {
      color: #06c4d1;
    }
  }
}
</style>
