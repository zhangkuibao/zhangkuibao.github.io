// 通用入口文件
import Vue from 'vue';
import App from './App.vue'
import { createRouter } from './router'

// 导出一个创建Vue实例的函数
export function createApp() {
	const router = createRouter();
	
	const app = new Vue({
		router,
		render: h => h(App)
	})
	return { app, router }
}