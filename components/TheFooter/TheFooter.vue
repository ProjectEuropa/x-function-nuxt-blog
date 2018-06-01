<template>
    <footer>
      <small>{{ copyrights }}</small>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      copyrights: new Date().getFullYear() + " Team Project Europa"
    };
  }
};
</script>


<style lang="scss" scoped>
footer {
  padding-top: 3rem;
  bottom: 0;
  background: #1A1A1A;
  width: 100%;
  height: 6rem;
  text-align: center;
  color: #ffffff;
}
</style>

