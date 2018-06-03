<template>
  <div>
    <section class="main-visual">
      <h2>Welcome to Web Site of Team Project Europa.</h2>
       <div id="particles-js"></div>
      </section>
      <section class="our-services-area">
        <h2 id="services">Our Skills</h2>
        <div id="service-contents">
          <div class="elements">
            <i class="fa fa-gamepad" aria-hidden="true"></i>
            <h3>Carnage Heart</h3>
            <p>We develop information about Carnage Heart.</p>
          </div>
          <div class="elements">
            <i class="fa fa-desktop" aria-hidden="true"></i>
            <h3>Web Site</h3>
            <p>We will make creative website.</p>
          </div>
          <div class="elements">
            <i class="fa fa-diamond" aria-hidden="true"></i>
            <h3>Web Appliction</h3>
            <p>We will accept requests for web applications.</p>
          </div>
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
  background: #000000 url("~/assets/image/europa.jpg") center top no-repeat
    fixed;
}

@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>

// Particlesjs
<style lang="scss" scoped>
.main-visual {
  width: 100%;
  height: 100%;
  h2 {
    color: #fff;
    position: absolute;
    z-index: 100;
    top: 35%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }
  canvas {
    display: block;
  }
  #particles-js {
    // position: absolute;
    width: 100%;
    height: 100%;
    background-color: #333b6b;
    background-image: url("~/assets/image/earth.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 0%;
  }
}

.our-services-area {
  padding-top: 20px;
  background-color: white;
  #services {
    text-align: center;
  }
  #service-contents {
    display: table;
    table-layout: fixed;
    width: 100%;
    text-align: center;
    .elements {
      display: table-cell;
      vertical-align: middle;
      i {
        font-size: 5em;
        color: #fff;
        background-color: #000;
        border-radius: 100%;
        padding: 30px;
      }
    }
  }
}
@media (max-width: 669px) {
  .main-visual {
    h2 {
      top: 20%;
      font-size: 1em;
    }
    #particles-js {
      background-size: 100%;
      height: 265px;
    }
  }
  .our-services-area {
    #service-contents {
      display: flex;
      flex-direction: column;
      .elements {
        margin-bottom: 50px;
        i {
          font-size: 3em;
        }
      }
    }
  }
}
</style>