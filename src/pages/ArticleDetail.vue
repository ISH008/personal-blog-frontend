<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div>
    <h1>文章详情页</h1>
    <p>当前文章ID：{{ id }}</p>
  </div>
</template>
