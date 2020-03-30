<script>
    import Modal from './Modal.svelte';
    import { submitFailure } from './stores';

    const email = 'artem@nakhodkin.dev';

    function handleModalClose() {
        submitFailure.set(false);
    }
</script>

<Modal title="Oops!" bind:open={$submitFailure} on:close={handleModalClose}>
    <div slot="body">
        <p>It's unfortunate but it seems that error has occurred</p>
        <p>You are welcome to write me an email at <a href="mailto:{email}?subject=Mail from nakhodkin.dev" title="{email}">{email}</a></p>
    </div>
</Modal>
