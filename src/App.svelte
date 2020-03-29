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

<div class="app">
	<main>
		<section>
			<hgroup>
				<h1>Hi there 👋🏻</h1>
				<h2>My name is {name}</h2>
			</hgroup>
			<p>I work as a software engineer</p>
			<p>Recently I've been focusing on web development</p>
			<p>I fond of being involved in resolving challenging problems and performing nontrivial tasks</p>
			<button on:click={showModal}>
				<span>Les&apos;s have a chat</span>
				<svg height="30" viewBox="0 0 60 60" width="30" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="008---Letter" fill-rule="nonzero"><path id="Shape" d="m47 1h-44c-1.10320187.0032948-1.9967052.89679813-2 2v54c.0032948 1.1032019.89679813 1.9967052 2 2h34l12-12v-44c-.0032948-1.10320187-.8967981-1.9967052-2-2z" fill="#e8edfc"/><path id="Shape" d="m47 1h-3c1.1032019.0032948 1.9967052.89679813 2 2v44l-12 12h3l12-12v-44c-.0032948-1.10320187-.8967981-1.9967052-2-2z" fill="#cad9fc"/><path id="Shape" d="m6 1v58h-3c-1.10320187-.0032948-1.9967052-.8967981-2-2v-54c.0032948-1.10320187.89679813-1.9967052 2-2z" fill="#e8edfc"/><path id="Shape" d="m37 59v-10c0-1.1045695.8954305-2 2-2h10z" fill="#e8edfc"/><path id="Shape" d="m46 47-9 9v3l12-12z" fill="#cad9fc"/><path id="Shape" d="m27.21 36.9c-.7725247 1.7494822-1.355838 3.5765268-1.74 5.45-.4492335 2.0758637-.7136011 4.1874581-.79 6.31l-4.56 3.34c.7742929-3.9085721 2.226163-7.6516218 4.29-11.06.833009-1.4135016 1.7688675-2.7638118 2.8-4.04z" fill="#e8edfc"/><path id="Shape" d="m59 16.53s-.69 11.02-7.08 13.07c-4.26 1.37-8.8 2.58-11.26 7.37-4 7.76-11.99 8.05-15.19 5.38.384162-1.8734732.9674753-3.7005178 1.74-5.45-1.0311325 1.2761882-1.966991 2.6264984-2.8 4.04-1.07-2.23-3.81-9.87 4.25-17.98 9.59-9.64 20.38-.89 30.34-6.43z" fill="#fff"/><path id="Shape" d="m55.859 17.827c-.408 2.973-1.9 10.157-6.939 11.773-4.26 1.37-8.8 2.58-11.26 7.37-1.6548219 3.5736306-4.9577775 6.1078399-8.838 6.781 3.769.595 8.887-1.056 11.838-6.781 2.46-4.79 7-6 11.26-7.37 6.39-2.05 7.08-13.07 7.08-13.07-.9941342.5506567-2.0479808.9858172-3.141 1.297z" fill="#e8edfc"/><path id="Shape" d="m3 59h3c-1.10320187-.0032948-1.9967052-.8967981-2-2v-54c.0032948-1.10320187.89679813-1.9967052 2-2h-3c-1.10320187.0032948-1.9967052.89679813-2 2v54c.0032948 1.1032019.89679813 1.9967052 2 2z" fill="#fff"/><path id="Rectangle-path" d="m0 3h2v8h-2z" fill="#fff"/><g fill="#428dff"><path id="Shape" d="m1.02 8c-.55228475.00276142-1.00223858-.44271525-1.005-.995s.44271525-1.00223858.995-1.005h.01c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1z"/><path id="Shape" d="m59.533 15.684c-.3090562-.1947535-.6997154-.205488-1.019-.028-2.6196228 1.3749704-5.5588065 2.0257058-8.514 1.885v-14.541c0-1.65685425-1.3431458-3-3-3h-44c-1.65685425 0-3 1.34314575-3 3 0 .35726559.19059892.68739261.5.8660254.30940108.1786328.69059892.1786328 1 0 .30940108-.17863279.5-.50875981.5-.8660254 0-.55228475.44771525-1 1-1h2v43c0 .5522847.44771525 1 1 1s1-.4477153 1-1v-43h40c.5522847 0 1 .44771525 1 1v14.48c-.762-.04-1.53-.092-2.307-.146-7.082-.484-12.451-.4-17.742 4.921-8 8.047-5.875 15.789-4.665 18.625-1.8309362 3.1540195-3.1769969 6.5655232-3.993 10.12h-8.293c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h9.117c.2125025.0000953.4195105-.0675063.591-.193l4.564-3.341c.2555786-.1867475.4076502-.4834727.41-.8.0574764-1.5763657.2245464-3.1468234.5-4.7 1.2879527.6077168 2.6969552.9154339 4.121.9.7546733-.0009868 1.5073777-.0770277 2.247-.227 3.9466302-.9016819 7.2628818-3.5613156 9-7.218 1.3774675-2.5670095 3.6854224-4.5092698 6.45-5.428v14.007h-9c-1.6568542 0-3 1.3431458-3 3v9h-29v-9c0-.5522847-.44771525-1-1-1s-1 .4477153-1 1v9h-2c-.55228475 0-1-.4477153-1-1v-46c0-.5522847-.44771525-1-1-1s-1 .4477153-1 1v46c0 1.6568542 1.34314575 3 3 3h34c.26551-.0009302.5199309-.1065795.708-.294l12-12c.1869379-.1874111.2919438-.4412951.292-.706v-15.731c.493-.164.891-.291 2.226-.717 6.959-2.233 7.742-13.482 7.774-13.96.0222252-.3653213-.1569001-.7135992-.467-.908zm-20.533 32.316h7.586l-8.586 8.586v-7.586c0-.5522847.4477153-1 1-1zm-15.3.14-1.972 1.443c.6431406-2.1840008 1.4933314-4.3016088 2.539-6.324-.2975557 1.6125473-.4869781 3.2431829-.567 4.881zm27.913-19.492c-2.2823738.6297857-4.495536 1.4877797-6.606 2.561-.8492275-.032454-1.6613969-.3562625-2.3-.917-.252944-.2525868-.6214274-.3510425-.966646-.25828-.3452186.0927626-.6147254.3626507-.707.708-.0922745.3453494.006702.7136932.259646.96628.4370954.4267654.9516368.7661726 1.516 1-1.2603966 1.0494148-2.2940388 2.3443596-3.038 3.806-.3103459.6033125-.664285 1.1831843-1.059 1.735-1.8175565.0033323-3.6140869-.388731-5.265-1.149-.4942948-.2468713-1.0951287-.0462948-1.342.448-.2468712.4942949-.0462948 1.0951287.448 1.342 1.4127017.6764228 2.9336937 1.0982247 4.493 1.246-1.3725053 1.276528-3.0662431 2.155889-4.9 2.544-1.8809663.4350488-3.8561886.1646166-5.551-.76.3523506-1.5420129.8457616-3.0483557 1.474-4.5 7.715-9.52 13.319-11.731 22.931-13.064.5461726-.0768608.9269875-.5814275.8511487-1.127743-.0758389-.5463155-.5796923-.9280737-1.1261487-.853257-9.973 1.384-16.151 3.813-24.274 13.877-.01.011-.018.022-.027.034-.653.81-1.24 1.623-1.785 2.432-1.1561597-4.0990187-.3621479-8.5020405 2.153-11.939.0447228.494255.1256061.9845681.242 1.467.0878873.3465476.3539795.6198835.6980422.7170446.3440628.0971612.7138247.0033865.97-.246.2561754-.2493864.3598451-.616497.2719578-.9630446-.272532-1.1537036-.3210769-2.3489957-.143-3.521.176-.189.354-.378.542-.568 1.7041603-1.7748954 3.8313909-3.0876397 6.182-3.815-.3664323 1.0098271-.5542369 2.0757454-.555 3.15 0 .5522847.4477153 1 1 1s1-.4477153 1-1c-.0141085-1.2981981.3365287-2.5742819 1.012-3.683 1.6669297-.1992817 3.3485593-.2461424 5.024-.14-.365001.4205073-.6779293.8835203-.932 1.379-.2452001.4948481-.0428363 1.0947761.452 1.34.137878.0687798.2899193.1043931.444.104.3814967.0015143.7306171-.2141646.9-.556.4436872-.838909 1.0822372-1.5590781 1.862-2.1 4.18.288 8.137.475 12.029-1.122-.484 3.035-1.96 9.078-6.178 10.426z"/><path id="Shape" d="m35 12c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-16c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"/><path id="Shape" d="m10 20c0 .5522847.4477153 1 1 1h15c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-15c-.5522847 0-1 .4477153-1 1z"/><path id="Shape" d="m11 26h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-3c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"/><path id="Shape" d="m18 24c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h4c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"/><path id="Shape" d="m11 31h9c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-9c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"/><path id="Shape" d="m11 36h8c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-8c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"/><path id="Shape" d="m11 41h9c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-9c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"/><path id="Shape" d="m11 46h7c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-7c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"/></g></g></g></svg>
			</button>
		</section>
	</main>

	<footer>
		<section class="contact">
			<span>You are welcome to shot me an email at</span>
			<a href="mailto:{email}?subject=Mail from nakhodkin.dev" title="{email}">{email}</a>
		</section>

		<section>
			<a href="https://www.linkedin.com/in/nakhodkin/" title="LinkedIn" target="_blank">
				<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
			</a>

			<a href="https://github.com/nakhodkin" title="GitHub" target="_blank">
				<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
			</a>
		</section>

		<dialog class="form" id="favDialog" bind:this={formDialog}>
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
</div>

<style>
	.app {
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: auto auto;
		height: 100vh;
		align-items: center;
		/*background: #eee no-repeat 120px 130px / 300px url("../assets/pexels-photo-1179229.jpg");*/
	}

	main {
		color: #333;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto 1em;
		font-family: 'Source Sans Pro', sans-serif;
		background: rgba(255, 255, 255, 0.5);
	}

	footer {
		color: #333;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-family: 'Sourse Sans Pro',  sans-serif;
		background: rgba(255, 255, 255, 0.5);
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
		.app {
			grid-template-columns: auto auto;
			grid-template-rows: unset;
		}
		main, footer {
			max-width: none;
		}
	}

	button {
		display: flex;
		align-items: center;
	}

	button span {
		margin-right: 1em;
	}

	a {
		display: inline-block;
		color: unset;
		border: 1px solid transparent;
		border-radius: 2px;
		padding: 2px;
		outline: none;
		color: #4056a1;
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
		border-color: #c2cbe3;
	}

	input, textarea {
		width: 100%;
	}

	input:focus, textarea:focus {
		outline-color: #4056a1;
	}

	.form button {
		display: inline-block;
	}

	button {
		background-color: #4056a1;
		color: #fff;
		text-shadow: 0px 0px #000;
		border-color: #333;
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

	.success footer {
		padding: 0;
		margin-top: 2em;
	}

	img {
		position: absolute;
	}
</style>
