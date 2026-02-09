<template>
    <div class="article-page">
      <h1>文章列表</h1>
  
      <ul>
  <li v-for="a in articles" :key="a.id">
    <router-link :to="`/articles/${a.id}`">
      {{ a.title }}
    </router-link>
  </li>
</ul>

    </div>
  </template>

<script setup>
import { articles } from '../mock/articles'
</script>

<style scoped>
.article-page ul {
  list-style: none;
  text-align: left;
  padding: 0;
}

.article-page li {
  margin: 12px 0;
}


</style>
  