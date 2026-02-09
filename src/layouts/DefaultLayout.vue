<template>
    <div class="app">
      <AppHeader />
  
      <main class="page">
        <slot />
      </main>
  
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  import AppHeader from '../components/common/AppHeader.vue'
  import AppFooter from '../components/common/AppFooter.vue'
  </script>
  
  <style scoped>
  .page{
    max-width: var(--container-width);
    margin: 24px auto;
    padding: 60px;
    background: #e8e8e8;
    border-radius: 12px;
    box-sizing: border-box;
  }
  </style>
  