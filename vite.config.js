// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
let opts = {
  plugins: [vue()],
  build: {
    outDir: 'docs'
  }
}

export default ({ command, mode }) => {
  return opts
}
