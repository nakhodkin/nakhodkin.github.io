<script>
    import Form from './Form.svelte';
    import { submitPending, submitSuccess, submitFailure, formModalShown, form } from './stores';

    export let api;

    let email = 'artem@nakhodkin.dev';

    async function sendForm() {
        submitPending.set(true);

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        try {
            const response = await fetch(api, {
                method: 'POST',
                headers,
                body: JSON.stringify(form)
            });

            if (response.ok) {
                submitSuccess.set(true);
            } else {
                throw new Error(response.statusText);
            }
        } catch(err) {
            submitFailure.set(true);
        } finally {
            submitPending.set(false);
        }
    }

    function handleFormUpdate(event) {
        form.update(formState => ({ ...formState, ...event.detail }));
    }
</script>
<div class="background2">
    <footer>
        <section class="contact">

            <Form model={$form}
                  on:submit={sendForm}
                  on:update={handleFormUpdate}
                  processing={$submitPending} />
            <span>Shot me an email at</span>
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
    </footer>
</div>

<style>
    h2 {
        font-weight: normal;
    }

    .background2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: linear-gradient(to top, #939dce, #5980cb);
        box-shadow: -2px 0 75px rgba(0,0,0,.3);
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

    main button {
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

    .contact form button {
        display: inline-block;
    }
</style>
