<template>
  <section class="article-page">
    <h1 class="page-title">文章</h1>

    <div class="module-grid">
      <div
        v-for="mod in modulesWithArticles"
        :key="mod.key"
        class="module-card"
      >
        <div class="card-inner">
          <!-- 正面：只展示模块标题 -->
          <div class="card-face card-front">
            <h2 class="module-title">{{ mod.name }}</h2>
            <p class="module-desc">{{ mod.description }}</p>
          </div>

          <!-- 背面：最新 4 篇文章 -->
          <div class="card-face card-back">
            <h3 class="card-back-title">最新文章（{{ mod.articles.length }}）</h3>
            <ul class="article-list">
              <li
                v-for="a in mod.articles"
                :key="a.id"
                class="article-item"
              >
                <router-link
                  :to="`/articles/${a.id}`"
                  class="article-link"
                >
                  <div class="article-meta">
                    <span class="article-date">{{ a.date }}</span>
                  </div>
                  <p class="article-title">{{ a.title }}</p>
                </router-link>
              </li>
            </ul>
            <p
              v-if="!mod.articles.length"
              class="empty-tip"
            >
              暂时还没有文章，等我写点东西再来看～
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { articles } from '../mock/articles'

const modules = [
  {
    key: 'flow',
    name: '流程备忘录',
    description: '记录一些固定流程和操作步骤，方便以后直接照着做。'
  },
  {
    key: 'qa',
    name: '问题与解决',
    description: '日常踩坑 & Debug 记录，问题怎么排查、最后怎么解决。'
  },
  {
    key: 'thoughts',
    name: '我的想法',
    description: '关于学习、职业发展、生活节奏的一些随想。'
  }
]

// 这里用一个简单的映射把 mock 文章分配到模块中
// 为了保持 mock 数据结构不变，只在前端做映射
const moduleMap = {
  flow: ['1'],
  qa: ['2'],
  thoughts: ['3']
}

const modulesWithArticles = computed(() => {
  const byId = new Map(articles.map(a => [a.id, a]))

  return modules.map(mod => {
    const ids = moduleMap[mod.key] || []
    const list = ids
      .map(id => byId.get(id))
      .filter(Boolean)
      // 这里预留 slice(0, 4)，之后文章变多也只会取最新 4 条
      .slice(0, 4)

    return {
      ...mod,
      articles: list
    }
  })
})
</script>

<style scoped>
.article-page {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.page-title {
  margin: 0;
  font-size: 24px;
  color: #111827;
}


.module-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px 24px;
  padding: 8px 4px 24px;
}

.module-card {
  perspective: 1200px;
}

/* 让卡片上下交错：右侧列稍微下移 */
.module-card:nth-child(2n) {
  margin-top: 28px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 220px;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}

.module-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 18px 20px;
  backface-visibility: hidden;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.1);
  box-sizing: border-box;
}

.card-front {
  background: linear-gradient(135deg, #e0f2fe, #c7d2fe);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.module-title {
  margin: 0;
  font-size: 18px;
  color: #0f172a;
}

.module-desc {
  margin: 0;
  font-size: 13px;
  color: #475569;
}

.card-back {
  background: #0f172a;
  color: #e5e7eb;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
}

.card-back-title {
  margin: 0 0 10px;
  font-size: 14px;
  color: #e5e7eb;
}

.article-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.article-item {
  border-radius: 8px;
  overflow: hidden;
}

.article-link {
  display: block;
  padding: 6px 8px;
  text-decoration: none;
  color: inherit;
  border-radius: 8px;
  transition: background 0.18s ease;
}

.article-link:hover {
  background: rgba(248, 250, 252, 0.1);
}

.article-meta {
  font-size: 11px;
  color: #9ca3af;
}

.article-title {
  margin: 2px 0 0;
  font-size: 13px;
  color: #e5e7eb;
}

.empty-tip {
  margin: 8px 0 0;
  font-size: 12px;
  color: #9ca3af;
}

/* 页面背景花纹：放在卡片外侧的装饰块，而不是紧贴在卡片后面 */
.article-page::before,
.article-page::after {
  content: '';
  position: absolute;
  border-radius: 32px;
  filter: blur(1px);
  opacity: 0.55;
  z-index: -1;
}

.article-page::before {
  width: 220px;
  height: 220px;
  top: -10px;
  left: -30px;
  background: linear-gradient(135deg, #bfdbfe, #e0f2fe);
}

.article-page::after {
  width: 260px;
  height: 260px;
  bottom: -30px;
  right: -40px;
  background: linear-gradient(135deg, #bbf7d0, #dcfce7);
}

@media (max-width: 900px) {
  .module-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }

  .card-inner {
    height: 200px;
  }

  .module-card:nth-child(2n) {
    margin-top: 0;
  }
}
</style>