<script>
    import BackdropContainer from "../backdrop/BackdropContainer.svelte";

    let _class = "";
    export let id = undefined;

    export {_class as class};

    export let palette = undefined;
    export let state = false;
</script>

<BackdropContainer {...$$props} class="sheet {_class}" {id} {palette} bind:state>
    <slot />
</BackdropContainer>
