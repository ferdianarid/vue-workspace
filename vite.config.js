import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import configRouterPlugin from 'vite-plugin-vue-router';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		configRouterPlugin(),
	]
})
