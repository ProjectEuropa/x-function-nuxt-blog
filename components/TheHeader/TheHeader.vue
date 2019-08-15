<template>
    <header class="main-header">
        <h1><a href="/">Europa</a></h1>
        <hr>
        <nav class="main-nav">
            <ul class="nav-links">
                <li class="nav-link" :class="{'active': url === '/'}"><a href="/">Home</a></li>
                <li class="nav-link" :class="{'active': url.indexOf('/about') !== -1}"><a href="/about">About</a></li>
                <li class="nav-link" :class="{'active': url.indexOf('/portfolio') !== -1}"><a href="/portfolio">Portfolio</a></li>
                <li class="nav-link" :class="{'active': url.indexOf('/contact') !== -1}"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    this.url = location.pathname;
  }
}
</script>

<style lang="scss">
header {
  padding-top: 1px;
  color: #000;
  background: #1a1a1a;
  hr {
    width: 70%;
  }
  h1 {
    text-align: center;
    font-style: oblique;
    width: 115px;
    height: 100px;
    margin: auto;
    margin-top: 25px;
    padding-top: 25px;
    background-color: #fff;
    border-radius: 100%;
    a {
      color: #1a1a1a;
      text-decoration: none;
    }
  }
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
  &.active {
    a {
      color: #06c4d1;
      border-bottom: 3px solid #06c4d1;
    }
  }
}
@media (max-width: 669px) {
  .nav-links {
    a {
      font-size: 0.4em;
    }
  }
}
</style>
