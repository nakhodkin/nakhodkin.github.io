import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		api: process.env.api,
		run: process.env.run,
		date: process.env.date,
	}
});

export default app;
