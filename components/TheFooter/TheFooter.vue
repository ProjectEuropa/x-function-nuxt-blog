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
  position: fixed;
  bottom: 0;
  background: #022d30;
  width: 100%;
  height: 30px;
  text-align: center;
  color: #ffffff;
}
</style>

