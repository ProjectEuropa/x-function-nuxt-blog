<template>
    <section id="about-page">
        <p>Team Project Europaはフリーランス（個人事業主）としてWebサイト・Webアプリケーションの制作を行っています。</p>
        <div class="about-area">
          <div class="element">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            <h3>Expert of Carnage Heart</h3>
            <h4>All rounder and Expert of 36chip.</h4>
            <img src="@/assets/images/chip.jpeg">
            <p>Carnage Heart EXA was the most proud and kept official rating rank 1.</p>
            <p>カルネージハートEXAでは公式レーティングランキング1位を保持していました。</p>
            <p></p>
          </div>
          <div class="element">
            <i class="fa fa-laptop" aria-hidden="true"></i>
            <h3>Web Engineer</h3>
            <h4>HTML5 CSS3 PHP Laravel JavaScript jQuery Vue.js</h4>
            <img src="@/assets/images/web-engineer.jpeg">
            <p>Backend uses Laravel preference, frontend uses Vue.js preference.</p>
            <p>バックエンドはLaravel、フロントエンドはVue.jsを得意とします。</p>
          </div>
        </div>
    </section>
</template>


<style lang="scss">
#about-page {
  background-color: #f3f3f1;
  margin-top: 0px;
  padding-top: 30px;
  padding-bottom: 30px;
  p {
    text-align: center;
    margin-bottom: 40px;
  }
  .about-area {
    display: flex;
    justify-content: space-evenly;
    .element {
      text-align: center;
      i {
        font-size: 5em;
        color: #fff;
        background-color: #000;
        border-radius: 100%;
        padding: 30px;
      }
    }
    img {
      border-radius: 5%;
      max-width: 75%;
      max-height: 75%;
    }
  }
}

@media (max-width: 669px) {
  #about-page {
    .about-area {
      display: block;
      .element {
        margin-bottom: 50px;
        i {
          font-size: 3em;
        }
      }
    }
  }
}
</style>

