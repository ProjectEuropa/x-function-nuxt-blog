<template>
  <div>
      <div class="image-text">
        
        <!-- <img src="@/assets/image/earth.jpg" style="width: 100vw;">
        <h2>Welcome to Blog of Team Project Europa.</h2> -->
        
      </div>
      <div class="main-visual">
        <h2>Welcome to Blog of Team Project Europa.</h2>
        <div id="particles-js"></div>
      </div>
      <!--  -->
    <section id="posts">
        <div class="title-container">
        </div>
    </section>
  </div>
</template>

<script>
let particlesJs;
if (process.browser) {
  particlesJs = require("particles.js");
}
export default {
  components: {},
  mounted() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 72,
          density: { enable: true, value_area: 1281.3838946061746 }
        },
        color: { value: "#4c5375" },
        shape: {
          type: "star",
          stroke: { width: 13, color: "#535661" },
          polygon: { nb_sides: 12 },
          image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
          value: 1,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
        },
        size: {
          value: 4.004324670644295,
          random: true,
          anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
        },
        line_linked: {
          enable: false,
          distance: 599.7522076405273,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "bottom-right",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 600 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "bubble" },
          onclick: { enable: true, mode: "repulse" },
          resize: true
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
          repulse: { distance: 400, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    });
  }
};
</script>

// global
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



// Particlesjs
<style scoped>
/* ---- reset ---- */
body {
  margin: 0;
  font: normal 75% Arial, Helvetica, sans-serif;
}
canvas {
  display: block;
  vertical-align: bottom;
} /* ---- particles.js container ---- */
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #333b6b;
  background-image: url("~/assets/image/earth.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50% 0%;
}
</style>

<style lang="scss" scoped>
.main-visual {
  width: 100%;
  height: 100%;
  h2 {
    color: #fff;
    position: absolute;
    z-index: 999;
    top: 45%;
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