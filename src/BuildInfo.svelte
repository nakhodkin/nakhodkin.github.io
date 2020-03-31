<script>
    export let run;
    export let date;
</script>

<div>
    <h3>Build info</h3>
    <p>Build #{run}</p>
    <p>{date}</p>
</div>

<style>
    h3 {
        margin-block: .7em .7em;
    }

    div {
        position: fixed;
        bottom: 0;
        right: 30px;
        color: #333333b3;
    }

    p {
        margin-block: .5em .5em;
    }
</style>

