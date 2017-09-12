<template>
  <div class="categories">
    <h1 class="title">分类</h1>
    <p class="desc">目前共计分类66种</p>
    <ul>
      <li>
        <a>
          <span class="name">HTML5</span>
          <span class="number">(222)</span>
        </a>
      </li>
       <li>
        <a>
          <span class="name">CSS</span>
          <span class="number">(222)</span>
        </a>
      </li>
       <li>
        <a>
          <span class="name">Javascript</span>
          <span class="number">(222)</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'categories'
  }
</script>

<style lang="sass" scoped>
@import '../../assets/css/var'
.categories
  padding: 50px 0
  height: 600px
  .title,.desc
    text-align: center
  .title
    font-size: 18px
    color: $fontColor
  .desc
    color: $fontDescColor
    margin-top: 20px
  ul
    margin-left: 60px
    margin-top: 40px
    li
      margin-bottom: 20px
      a
        font-size: 14px
        text-decoration: underline
        .name
          color: $fontColor
        .number
          color: $fontDescColor
</style>
