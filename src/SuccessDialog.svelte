<script>
    import Modal from './Modal.svelte';
    import { submitSuccess } from './stores';

    function handleModalClose() {
        submitSuccess.set(false);
    }
</script>

<Modal title="Success" bind:open={$submitSuccess} on:close={handleModalClose}>
    <div slot="body">
        <p>Thank you!</p>
        <p>I'll get back to you as soon as I can</p>
    </div>
</Modal>
