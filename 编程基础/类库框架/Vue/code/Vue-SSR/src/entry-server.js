import { createApp } from './app.js
export default context => {
	return new Promise((res,rej) => {
		const { app } = createApp();
		router.push(context.url);
		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents();
			if(!matchedComponents.length) return rej({code: 404})
			res(app)
		},rej)
	})
}