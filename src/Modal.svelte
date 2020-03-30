<script>
    import { createEventDispatcher } from 'svelte'

    export let title;
    export let open;
    export let closeAction = true;

    let dialog;

    const dispatch = createEventDispatcher();

    function handleClose() {
      if (dialog) {
        dialog.close();
        dispatch('close');
      }
    }

    $: if (dialog) {
        if(open) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }

</script>

<dialog bind:this={dialog} on:close={handleClose}>
    <section>
        {#if title}
            <header>
                <h2>{title}</h2>
            </header>
        {/if}
        <div>
            <slot name="body"></slot>
        </div>
        <footer>
            {#if closeAction}
                <button on:click={handleClose} title="Close">Close</button>
            {/if}
        </footer>
    </section>
</dialog>

<style>
    footer {
        padding: 0;
        margin-top: 2em;
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
</style>
