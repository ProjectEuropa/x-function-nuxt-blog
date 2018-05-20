<template>
  <section id="posts">
    	<div class="title-container">
        <h1>Welcome to Blog of Team Project Europa.</h1>
        <p class="message">We love CarnageHeart series.</p>
        <div class="gif">
          <img src="@/assets/image/mocking.gif">
          <img src="@/assets/image/tuki.gif">
        </div>
      </div>
  </section>
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
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #dedede;
}

h1,
p ,
.gif{
  position: relative;
  display: block;
  margin: 0;
  font-size: 4rem;
  line-height: 1;
  transform: translateY(6rem);
  animation: up 500ms linear forwards;
  z-index: 1;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 1);

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 0px;
    height: 1px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }

  &::before {
    top: 1.4rem;
  }

  &::after {
    bottom: 0.4rem;
  }
}

.title-container {
  font-size: 0;
  position: relative;
  overflow: hidden;
  padding-bottom: 0.4rem;
  .message {
    text-align: center;
  }
  .gif {
    text-align: center;
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
  }
}

@keyframes up {
  100% {
    transform: translateY(0);
  }
}

@keyframes draw {
  100% {
    width: 1%;
  }
}
</style>
