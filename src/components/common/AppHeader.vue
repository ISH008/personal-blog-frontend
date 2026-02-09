<template>
    <header class="header">
      <div class="inner">
        <div class="logo">OTX的博客</div>
  
        <nav class="nav">
          <router-link to="/">首页</router-link>
          <router-link to="/projects">我的项目</router-link>
          <router-link to="/learningmap">学习图谱</router-link>
          <router-link to="/articles">文章</router-link>
          <router-link to="/about">关于</router-link>
          
        </nav>
      </div>
    </header>
  </template>
  
  <style scoped>
  .header{
    position: sticky;
    top: 0;
    background: #fff;
    border-bottom: 1px solid #eee;
    border-radius: 8px;
  }
  .inner{
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo{
    font-weight: 700;
  }
  .nav{
    display: flex;
    gap: 16px;
  }
  .nav a {
  text-decoration: none;
  color: #141414;
  padding: 8px 16px;
  display: inline-block;
  border-radius: 6px;
  transition: background 0.2s ease;
}

.nav a:hover {
  background: #c2d2ca;
  color: #101010;
}

.nav a.router-link-active{
  background: #c2d2ca;
  color: #111;
}

  </style>
  