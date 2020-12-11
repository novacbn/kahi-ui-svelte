<script>
    import BackdropContainer from "../backdrop/BackdropContainer.svelte";

    let _class = "";
    export let id = undefined;

    export {_class as class};

    export let palette = undefined;
    export let viewport = undefined;
    export let state = false;
</script>

<BackdropContainer {...$$props} class="dialog {_class}" {id} {palette} {viewport} bind:state>
    <slot />
</BackdropContainer>
