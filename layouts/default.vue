<template>
  <div>
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'
export default {
  components:{
    TheHeader,
    TheFooter
  }
}
</script>

// global css
<style>
#posts {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

html {
  position: relative;
  min-height: 100%;
}

body {
  margin: 0;
  background: #000000 url("~assets/images/europa.jpg") center top no-repeat
    fixed;
}

@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>
