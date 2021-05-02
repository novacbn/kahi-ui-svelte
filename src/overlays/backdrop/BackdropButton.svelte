<script>
    import {getContext} from "svelte";

    import Button from "../../components/button/Button.svelte";

    import {CONTEXT_BACKDROP_ID} from "./BackdropContainer.svelte";

    const store_id = getContext(CONTEXT_BACKDROP_ID);

    let _for = undefined;
    export let palette = undefined;
    export let size = undefined;
    export let variation = undefined;

    export {_for as for};

    $: if (store_id) _for = $store_id;
</script>

{#if store_id}
    <Button id="{$store_id}-button" for={_for} {palette} {size} {variation} on:click>
        <slot />
    </Button>
{:else}
    <Button for={_for} {palette} {size} {variation} on:click>
        <slot />
    </Button>
{/if}
