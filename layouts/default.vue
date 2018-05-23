<template>
  <div>
    <the-header/>
    <main>
      <nuxt/>
    </main>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'
export default {
  components: { 
    TheHeader,
    TheFooter
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Lato",  sans-serif;
  }
  .main-content {
    margin-top: 5rem;
  }
</style>
