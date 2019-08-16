<template>
  <div class="promos">
    <div class="promo">
      <div class="deal">
        <span>Deployment</span>
        <span>Skill</span>
      </div>
      <span class="price">得意分野</span>
      <ul class="features">
        <li>レンタルサーバーの</li>
        <li>デプロイ改善(CI)など</li>
        <li>デプロイ自動化が得意分野</li>
      </ul>
    </div>
    <div class="promo">
      <div class="deal">
        <span>Testing</span>
        <span>Skill</span>
      </div>
      <span class="price">得意分野</span>
      <ul class="features">
        <li>テストコードやテストツールを</li>
        <li>利用した品質の高いコードで</li>
        <li>品質を担保します</li>
      </ul>
    </div>
    <div class="promo">
      <div class="deal">
        <span>Docker</span>
        <span>Tools</span>
      </div>
      <span class="price">実務経験2年</span>
      <ul class="features">
        <li>ローカル環境から</li>
        <li>サーバー構築まで可能</li>
      </ul>
    </div>
    <div class="promo">
      <div class="deal">
        <span>Jenkins</span>
        <span>Tools</span>
      </div>
      <span class="price">実務経験0.5年</span>
      <ul class="features">
        <li>Dockerを使用した</li>
        <li>CIサーバを構築可能</li>
      </ul>
    </div>
    <div class="promo">
      <div class="deal">
        <span>Laravel5(5.5~)</span>
        <span>Frameworks</span>
      </div>
      <span class="price">実務経験2年</span>
      <ul class="features">
        <li>設計・実装が得意分野</li>
        <li>テストを考慮した</li>
        <li>実装が可能</li>
      </ul>
    </div>
    <div class="promo">
      <div class="deal">
        <span>Vue.js</span>
        <span>Frameworks</span>
      </div>
      <span class="price">実務経験2年</span>
      <ul class="features">
        <li>Laravel-Mixを使用した</li>
        <li>コンパイルの最適化から</li>
        <li>実装までが可能</li>
      </ul>
    </div>
    <div class="promo">
      <div class="deal">
        <span>jQuery</span>
        <span>Libraries</span>
      </div>
      <span class="price">実務経験4年</span>
      <ul class="features">
        <li>対応可能</li>
      </ul>
    </div>
    <div class="promo">
      <div class="deal">
        <span>PHP</span>
        <span>Languages</span>
      </div>
      <span class="price">実務経験2年</span>
      <ul class="features">
        <li>フルスクラッチ開発から</li>
        <li>Laravelを使用した開発まで</li>
        <li>対応可能</li>
      </ul>
    </div>
    <div class="promo">
      <div class="deal">
        <span>JavaScript</span>
        <span>Languages</span>
      </div>
      <span class="price">実務経験4年</span>
      <ul class="features">
        <li>対応可能</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.promos {
  width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
}
.promo {
  width: 250px;
  background: #0f1012;
  color: #f9f9f9;
  margin: 5px;
  &:hover {
    color: #64aaa4;
    transform: scale(1.2);
    box-shadow: 0 0 4px 1px rgba(20, 20, 20, 0.8);
  }
}
.deal {
  padding: 10px 0 0 0;
}
.deal span {
  display: block;
  text-align: center;
}
.deal span:first-of-type {
  font-size: 23px;
}
.deal span:last-of-type {
  font-size: 13px;
}
.promo .price {
  display: block;
  width: 250px;
  background: #292b2e;
  margin: 15px 0 10px 0;
  text-align: center;
  font-size: 23px;
  padding: 17px 0 17px 0;
}
ul {
  display: block;
  margin: 20px 0 10px 0;
  padding: 0;
  list-style-type: none;
  text-align: center;
  color: #999999;
}
li {
  display: block;
  margin: 10px 0 0 0;
}
button {
  border: none;
  border-radius: 40px;
  background: #292b2e;
  color: #f9f9f9;
  padding: 10px 37px;
  margin: 10px 0 20px 60px;
}
</style>