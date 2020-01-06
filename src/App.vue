<template>
  <div id="app">
    <header class="site-header">
      <figure class="site-logo">
        <img
          width="50"
          height="50"
          src="./assets/sufu.jpeg"
          alt="gun shot"
          class="site-logo__img"
        >
        <figcaption class="site-logo__name">
          Sufu Maker
        </figcaption>
      </figure>
      <nav class="site-nav">  
        <ul class="site-nav__wrap">
          <li class="site-nav__option">
            購買須知
          </li>
          <li class="site-nav__option">
            購物車
          </li>
          <li class="site-nav__option">
            登入
          </li>
        </ul>  
      </nav>
    </header>
    <section class="site-carousel">
      <vue-carousel :data="data"></vue-carousel>
    </section>
    <h1>{{ msg }}</h1>
    <h2>Essential Link</h2>
    <ul class="site-categories">
      <li class="site-category">
        <div class="site-category__img">
        </div>
        <h2 class="site-category__title">Item1</h2>
        <p class="site-category__desc">對 Pro 的大膽、創新之舉，以有史以來最薄的變形平板帶來時尚的設計和極致的行動力。</p>
      </li>
      <li class="site-category">
        <div class="site-category__img">
        </div>
        <h2 class="site-category__title">Item3</h2>
        <p class="site-category__desc">對 Pro 的大膽、創新之舉，以有史以來最薄的變形平板帶來時尚的設計和極致的行動力。</p>
      </li>
      <li class="site-category">
        <div class="site-category__img">
        </div>
        <h2 class="site-category__title">Item3</h2>
        <p class="site-category__desc">對 Pro 的大膽、創新之舉，以有史以來最薄的變形平板帶來時尚的設計和極致的行動力。</p>
      </li>
      <li class="site-category">
        <div class="site-category__img">
        </div>
        <h2 class="site-category__title">Item4</h2>
        <p class="site-category__desc">對 Pro 的大膽、創新之舉，以有史以來最薄的變形平板帶來時尚的設計和極致的行動力。</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: [
        `<div class="site-slide">
          <img class="site-slide__img site-slide__img--top" src="https://cdn.pixabay.com/photo/2016/06/09/23/46/war-1447021_1280.jpg">
        </div>`,
        `<div class="site-slide">
          <img class="site-slide__img site-slide__img--top" src="https://cdn.pixabay.com/photo/2015/08/21/14/34/determination-899011_1280.jpg">
        </div>`,
        `<div class="site-slide">
          <img class="site-slide__img" src="https://cdn.pixabay.com/photo/2016/11/18/15/17/army-1835299_1280.jpg">
        </div>`,
      ],
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  html {
    font-size: 10px;
  }
  body, figure, ul {
    margin: 0;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .site-header {
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .site-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .site-logo__img {
    margin: 10px;
  }
  .site-logo__name {
    font-size: 2rem;
    font-weight: bold;
  }
  .site-nav__wrap {
    font-size: 1.6rem;
  }
  .site-nav__option {
    cursor: pointer;
    transition: .3s;
  }
  .site-nav__option:hover {
    color: #009fc5;
  }
  .site-carousel {
    padding: 20px 60px 0;
  }
  .site-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 400px
  }
  .site-slide__img {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
  .site-slide__img--top {
    object-position: 0 0
  }
  .site-categories {
    padding: 0 60px;
    display: flex;
  }
  .site-category {
    flex: 1;
  }
  .site-category__img {
    height: 100px;
    margin: auto;
    background: #777777;
  }
  .site-category__title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
  .site-category__desc {
    font-size: 1.4rem;
    margin: 5px 0;
  }
</style>