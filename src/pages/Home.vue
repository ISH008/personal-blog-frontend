<template>
  <section class="home">
    <div class="hero">
      <div class="hero-main">
        <p class="hero-badge">欢迎来到我的主页👏👏💐💐💐</p>
        <h1 class="hero-title">记录代码、想法和成长的地方</h1>
        <p class="hero-subtitle">
          这里是我的个人博客，主要分享学习笔记、项目实践和一些随想。
        </p>

        <div class="hero-actions">
          
          <router-link to="/projects" class="btn ghost">看看我的项目</router-link>
          <router-link to="/articles" class="btn primary">开始阅读文章</router-link>
        </div>
      </div>

      <aside class="hero-side">
        <h2 class="side-title">最新文章</h2>
        <ul class="article-list">
          <li
            v-for="a in latestArticles"
            :key="a.id"
            class="article-item"
          >
            <router-link :to="`/articles/${a.id}`" class="article-link">
              <div class="article-meta">
                <span class="article-date">{{ a.date }}</span>
                <span class="article-tags">
                  <span
                    v-for="tag in a.tags"
                    :key="tag"
                    class="tag"
                  >
                    {{ tag }}
                  </span>
                </span>
              </div>
              <h3 class="article-title">{{ a.title }}</h3>
              <p class="article-summary">{{ a.summary }}</p>
            </router-link>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { articles } from '../mock/articles'

const latestArticles = computed(() => {
  return [...articles]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3)
})
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1.4fr);
  gap: 32px;
  align-items: flex-start;
}

.hero-main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #f5f5f5;
  color: #666;
  font-size: 13px;
}

.hero-title {
  font-size: 32px;
  line-height: 1.25;
  margin: 0;
  color: #111;
}

.hero-subtitle {
  margin: 0;
  color: #555;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 18px;
  border-radius: 999px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.18s ease;
}

.btn.ghost {
  background: #08bbec4f;
  color: #111827;
  border-color: #d1d5db;
}

.btn.ghost:hover {
  background: #6598ff;
}

.btn.primary {
  background: #8f4021b6;
  color: #fff;
}

.btn.primary:hover {
  background: #8f4021;
}



.hero-side {
  padding: 18px 20px;
  border-radius: 14px;
  background: linear-gradient(135deg, #e5f4ff, #c2d2cadc);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}

.side-title {
  font-size: 16px;
  margin: 0 0 12px;
  color: #111827;
}

.article-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.article-item {
  border-radius: 10px;
  overflow: hidden;
}

.article-link {
  display: block;
  padding: 10px 12px;
  text-decoration: none;
  color: inherit;
  border-radius: 10px;
  transition: background 0.18s ease, transform 0.18s ease;
}

.article-link:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.article-date {
  font-size: 12px;
  color: #6b7280;
}

.article-tags {
  display: flex;
  gap: 4px;
}

.tag {
  padding: 2px 6px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.08);
  color: #374151;
  font-size: 11px;
}

.article-title {
  font-size: 14px;
  margin: 0 0 2px;
  color: #111827;
}

.article-summary {
  margin: 0;
  font-size: 13px;
  color: #4b5563;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero-side {
    order: -1;
  }
}
</style>