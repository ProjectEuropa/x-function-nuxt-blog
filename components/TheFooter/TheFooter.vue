<template>
    <footer>
      <p><a href="https://twitter.com/M2_m_" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        <a href="https://github.com/ProjectEuropa" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
          <a href="https://qiita.com/ProjectEuropa" target="_blank"><span class="fa-stack" style="color:#4cb10d">
            <i class="fa fa-square fa-stack-2x"></i>
            <i class="fa fa-search fa-stack-1x fa-inverse fa-2x"></i>
            </span>
          </a>
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
  .fa-search {
    margin-top: -4px;
    font-size: 100%;
  }
}
</style>

