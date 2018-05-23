<template>
  <div>
      <div class="image-text">
        <img src="@/assets/image/earth.jpg" style="width: 100vw;">
        <h2>Welcome to Blog of Team Project Europa.</h2>
      </div>
    <section id="posts">
        <div class="title-container">
        </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="css">
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
}

@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>

<style lang="scss" scoped>
.image-text {
  position: relative;
  h2 {
    color: #fff;
    position: absolute;
    top: 15%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }
}
@media (max-width: 669px) {
  img {
    height: 350px;
  }
}
</style>
