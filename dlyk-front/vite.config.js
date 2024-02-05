import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  server:{
    host:'0.0.0.0' ,//ip地址
    port: 8081, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
  }
})
