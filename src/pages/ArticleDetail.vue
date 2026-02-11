<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { articles } from '../mock/articles'

const route = useRoute()

const article = computed(() => {
  const id = String(route.params.id ?? '')
  return articles.find(item => item.id === id)
})
</script>

<template>
  <section class="detail-page">
    <section v-if="article">
      <h1>{{ article.title }}</h1>
      <p>作者：{{ article.author }}</p>
      <p>发布时间：{{ article.date }}</p>
      <p>更新时间：{{ article.updatedAt }}</p>
      <hr />
      <p>{{ article.content }}</p>
    </section>

    <section v-else>
      <h1>文章不存在</h1>
      <p>未找到当前路由对应的文章内容。</p>
    </section>

    <router-link to="/articles" class="back-link">返回文章页</router-link>
  </section>
</template>

<style scoped>
.detail-page {
  min-height: 400px;
}

.back-link {
  position: fixed;
  right: 32px;
  bottom: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 10px;
  text-decoration: none;
  background: #0f172a;
  color: #f8fafc;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.25);
}

.back-link:hover {
  background: #1e293b;
}
</style>
