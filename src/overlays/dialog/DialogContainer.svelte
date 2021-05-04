<script>
    import BackdropContainer from "../backdrop/BackdropContainer.svelte";

    let _class = "";
    export let id = undefined;

    export {_class as class};

    export let captive = false;
    export let palette = undefined;
    export let viewport = undefined;
    export let state = false;
</script>

<BackdropContainer
    {...$$props}
    class="dialog {_class}"
    {id}
    {captive}
    {palette}
    {viewport}
    bind:state
    on:backgroundclick
>
    <slot />
</BackdropContainer>
