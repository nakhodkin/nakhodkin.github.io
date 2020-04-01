<script>
	import Intro from './Intro.svelte';
	import Inquiry from './Inquiry.svelte';
	import BuildInfo from './BuildInfo.svelte';

	import FormDialog from './FormDialog.svelte';
	import SuccessDialog from './SuccessDialog.svelte';
	import ErrorDialog from './ErrorDialog.svelte';

	export let api;
	export let run;
	export let date;
</script>

<div class="app">
	<Intro />
	<Inquiry {api} />
</div>

<FormDialog {api} />
<SuccessDialog />
<ErrorDialog />

<BuildInfo {run} {date} />

<style>
	.app {
		color: #1f1f1f;
		font-family: Inter, 'Source Sans Pro', sans-serif;
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: auto auto;
		height: 100vh;
		align-items: center;
	}

	h2 {
		font-weight: normal;
	}

	main {
		background: rgba(255, 255, 255, 0.3);
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		backdrop-filter: blur(10px);
		border-radius: 4px;
	}

	footer {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	label {
		margin-bottom: .5em;
	}

	footer svg {
		width: 2em;
	}

	footer a:first-of-type {
		margin-right: 1em;
	}

	h1 {
		margin-block-start: 0;
		margin-block-end: .5em;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h2 {
		margin-block-end: 1em;
	}

	@media (min-width: 480px) {
		main, footer {
			max-width: 360px;
		}
	}

	@media (min-width: 640px) {
		.app {
			grid-template-columns: 1fr max-content;
			grid-template-rows: unset;
			align-items: stretch;
		}
		main, footer {
			max-width: none;
		}
	}

	a:focus {
		outline: none;
		border-color: #c2cbe3;
	}

	input, textarea {
		border-radius: 4px;
		border: none;
		width: 100%;
	}

	textarea {
		resize: none;
	}

	input:focus, textarea:focus {
		outline: none;
		box-shadow: 0 0 0 1px #4056a1;
	}

	.form button {
		display: inline-block;
	}

	button {
		background-color: #4056a1;
		color: #fff;
		text-shadow: 0px 0px #000;
		cursor: pointer;
		margin-right: 1em;
		padding: .4em .8em;
		border-radius: 4px;
		border: none;
	}

	button:disabled {
		cursor: default;
	}

	a:active {
		color: #ef403d;
		text-decoration-color: #ef403d;
	}

	button:focus,
	button:active {
		box-shadow: 0px 0px 0px 2px #c2cbe3;
	}

	menu {
		padding-inline-start: 0;
	}

	img {
		position: absolute;
	}
</style>
