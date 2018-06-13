<template>
    <footer>
      <p><a href="https://twitter.com/M2_m_" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        <a href="https://github.com/ProjectEuropa" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
      </p>
      <small>{{ copyrights }}</small>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      copyrights: '© ' + new Date().getFullYear() + " Team Project Europa"
    };
  }
};
</script>


<style lang="scss" scoped>
footer {
  padding-top: 2rem;
  bottom: 0;
  background: #1A1A1A;
  width: 100%;
  height: 8rem;
  text-align: center;
  color: #ffffff;
  .fa {
    font-size: 1.5em;
    margin: 0 10px;
  }
  .fa-twitter {
    color: #00aced;
  }
  .fa-github {
    color: #ffffff;
  }
}
</style>

