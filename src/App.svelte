<script>
	import { onMount } from 'svelte';

	let name = "Artem";
	let email = "artem@nakhodkin.dev";

	let formDialog;
	let successDialog;
	let processing = false;
	let submitted = false;

	let form = {
		name: '',
		message: '',
		contacts: '',
	};

	onMount(() => {
		formDialog.returnValue = 'favAnimal';
	});

	function openCheck(dialog) {
		if(dialog.open) {
			console.log('Dialog open');
		} else {
			console.log('Dialog closed');
		}
	}

	function showModal() {
		if (formDialog) {
			formDialog.showModal();
		}
	}

	function sendForm() {
		processing = true;

		console.log('213', form);
		fetch('https://4flsugtdx1.execute-api.us-east-1.amazonaws.com/PROD', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form)
		}).then(r => r.json()).then(console.log).catch(console.error);
		return new Promise((r) => {
			setTimeout(() => r(), 3000);
		}).then(() => {
			processing = false;
			submitted = true;
			formDialog.close('Submitted successfully');

			successDialog.showModal();
		});

	}

	function closeModal() {
		if (formDialog) {
			formDialog.close('Cancel modal');
		}
	}

	function closeSuccessModal() {
		successDialog.close();
	}
</script>

<main>
	<section>
		<hgroup>
			<h1>Hi there!</h1>
			<h2>My name is {name}</h2>
		</hgroup>
		<p>I work as a software engineer</p>
		<p>Recently I've been focusing on web development</p>
		<p>I fond of being involved in resolving challenging problems and performing nontrivial tasks</p>
	</section>
</main>

<footer>
	<section class="contact">
		<button on:click={showModal}>
			Les&apos;s have a chat
		</button>
		<span>or shot me an email at</span>
		<a href="mailto:{email}" title="{email}">{email}</a>
	</section>

	<section>
		<a href="https://www.linkedin.com/in/nakhodkin/" title="LinkedIn" target="_blank">
			<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
		</a>

		<a href="https://github.com/nakhodkin" title="GitHub" target="_blank">
			<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
		</a>
	</section>

	<dialog id="favDialog" bind:this={formDialog}>
		<form method="dialog" on:submit|preventDefault={sendForm}>
			<section>
				<p>
					<label for="username">What is your name?</label>
					<input
							id="username"
							type="text"
							name="username"
							disabled={processing}
							bind:value={form.name}
							required>
				</p>
				<p>
					<label for="message">What would you like to say?</label>
					<textarea
							id="message"
							name="message"
							disabled={processing}
							bind:value={form.message}
							required></textarea>
				</p>
				<p>
					<label for="contacts">Share your contacts so I would be able to reach you back</label>
					<textarea
							id="contacts"
							name="contacts"
							disabled={processing}
							bind:value={form.contacts}
							required></textarea>
				</p>
			</section>
			<menu>
				<button
						type="submit"
						class:active={processing}
						disabled={processing}
						title="Submit">Submit</button>
				<button
						type="reset"
						on:click={closeModal}
						class:active={processing}
						disabled={processing}
						title="Cancel">Cancel</button>
			</menu>
		</form>
	</dialog>

	<dialog bind:this={successDialog}>
		<section class="success">
			<header>
				<h2>Success</h2>
			</header>
			<p>Thank you!</p>
			<p>I'll get back to you as soon as I can</p>
			<footer>
				<button on:click={closeSuccessModal} title="Close">Close</button>
			</footer>
		</section>
	</dialog>
</footer>

<style>
	main {
		color: #333333;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto 1em;
		font-family: 'Source Sans Pro', sans-serif;
	}

	footer {
		color: #333333;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-family: 'Sourse Sans Pro',  sans-serif;
	}

	footer svg {
		width: 2em;
	}

	footer a:first-of-type {
		margin-right: 1em;
	}

	h1 {
		/*color: #ff3e00;*/
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main, footer {
			max-width: none;
		}
	}

	a {
		display: inline-block;
		color: unset;
		border: 2px solid transparent;
		border-radius: 2px;
		padding: 2px;
		outline: none;
	}

	.contact {
		margin-bottom: 2em;
	}

	.contact a {
		text-decoration-line: underline;
		-webkit-text-decoration-thickness: 2px;
		text-decoration-thickness: 2px;
		-webkit-text-underline-offset: 2em;
		text-underline-offset: 4px;
	}

	a:focus {
		outline: none;
		border-color: #ef403d;
	}

	input, textarea {
		width: 100%;
	}

	input:focus, textarea:focus {
		outline-color: #ef403d;
	}

	button {
		background-color: #ffffff;
		border-color: #333;
		border-width: 2px;
		cursor: pointer;
		margin-right: 1em;
		padding: .4em .8em;
		border-radius: 2px;
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
		color: #ef403d;
		border-color: #ef403d;
	}

	menu {
		padding-inline-start: 0;
	}

	.success footer {
		padding: 0;
		margin-top: 2em;
	}
</style>
