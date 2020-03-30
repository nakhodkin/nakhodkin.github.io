<script>
    import { createEventDispatcher } from 'svelte';

    export let model;
    export let processing;
    export let withCancel;

    const dispatch = createEventDispatcher();

    let submit = () => dispatch('submit');
    let cancel = () => dispatch('cancel');
    let update = (event) => dispatch('update', {
      [event.target.name]: event.target.value
    });
</script>

<form method="post" on:submit|preventDefault={submit}>
    <section>
        <p>
            <label for="name">What is your name?</label>
            <input
                    id="name"
                    type="text"
                    name="name"
                    disabled={processing}
                    value={model.name}
                    on:input={update}
                    required>
        </p>
        <p>
            <label for="message">What would you like to say?</label>
            <textarea rows="4"
                      id="message"
                      name="message"
                      disabled={processing}
                      value={model.message}
                      on:input={update}
                      required></textarea>
        </p>
        <p>
            <label for="contacts">Share your contacts so I would be able to reach you back</label>
            <textarea
                    rows="2"
                    id="contacts"
                    name="contacts"
                    disabled={processing}
                    value={model.contacts}
                    on:input={update}
                    required></textarea>
        </p>
    </section>
    <menu>
        <button
                type="submit"
                class:active={processing}
                disabled={processing}
                title="Submit">Submit</button>
        {#if withCancel}
            <button
                    type="reset"
                    on:click={cancel}
                    class:active={processing}
                    disabled={processing}
                    title="Cancel">Cancel</button>
        {/if}
    </menu>
</form>

<style>
    label {
        margin-bottom: .5em;
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

    input, textarea {
        border-radius: 4px;
        border: none;
        width: 100%;
    }

    #favDialog input {
        border: 1px solid #1f1f1f;
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
        /*font-weight: 200;*/
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

    .contact form button {
        display: inline-block;
    }
</style>
