<template>
    <footer class="footer">
      <div class="inner">
        <span>© {{ new Date().getFullYear() }} Cy</span>
        <span class="sep">·</span>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer{
  
    border-bottom: 1px solid rgb(152, 156, 152); 
    background: #fff;
  }
  .inner{
    max-width: 1200px;
    margin: 0 auto;
    padding: 18px 24px;
    color: #666;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sep{ opacity: 0.6; }
  </style>
  