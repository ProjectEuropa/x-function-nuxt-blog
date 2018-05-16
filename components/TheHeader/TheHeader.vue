<template>
    <header class="main-header">
        <nav class="main-nav">
            <ul class="nav-links">
                <nuxt-link to="/" tag="li" class="nav-link"><a>All Posts</a></nuxt-link>
                <nuxt-link to="/about" tag="li" class="nav-link"><a>About</a></nuxt-link>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #022d30;
  height: 4.5rem;
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
  height: 100%;
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
