<script>
    import Form from './Form.svelte';
    import Modal from './Modal.svelte';
    import { form, submitPending, submitSuccess, submitFailure, formModalShown } from './stores';

    export let api;

    async function handleFormSubmit() {
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

    function handleDialogClose() {
        formModalShown.set(false);
        form.set({
            name: '',
            message: '',
            contacts: ''
        });
    }

    function handleFormCancel() {
        formModalShown.set(false);
        form.set({
            name: '',
            message: '',
            contacts: ''
        });
    }

    function handleFormUpdate(event) {
        form.update(formState => ({ ...formState, ...event.detail }));
    }
</script>

<Modal open={$formModalShown} on:close={handleDialogClose} closeAction={false}>
    <div slot="body" class="embedded">
        <Form model={$form}
              on:submit={handleFormSubmit}
              on:cancel={handleFormCancel}
              on:update={handleFormUpdate}
              processing={$submitPending}
              withCancel
        />
    </div>
</Modal>

<style>
    .embedded :global(:where(input, textarea)) {
        border: 1px solid #1f1f1f !important;
    }
</style>

