import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: './', // ← thay bằng tên repo của bạn
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    proxy: {
      '/posts': {
        target: 'http://localhost:3005',  // 👈 Port 3005
        changeOrigin: true,
      }
    }
  }
})
