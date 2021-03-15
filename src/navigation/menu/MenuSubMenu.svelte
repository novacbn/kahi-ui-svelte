<script>
    import {setContext} from "svelte";
    import {readable, writable} from "svelte/store";

    import {map_global_attributes} from "../../util/attributes";

    import {CONTEXT_MENU_ID, CONTEXT_MENU_STATE} from "./MenuContainer.svelte";

    export let id = undefined;

    export let state = false;

    let _store_id_set = null;
    const store_id = readable(id, (set) => (_store_id_set = set));
    const store_state = writable(state);

    setContext(CONTEXT_MENU_ID, store_id);
    setContext(CONTEXT_MENU_STATE, store_state);

    $: if (_store_id_set) _store_id_set(id);
    $: store_state.set(state);
</script>

<li {...map_global_attributes({...$$props, id: undefined})}>
    {#if id}<input {id} type="checkbox" bind:checked={$store_state} />{/if}
    <slot name="heading" />

    <ul>
        <slot />
    </ul>
</li>

<style>
    /**
     * HACK: Hackity hackity, this also doesn't work in older Browsers. Hopefully
     * `<svelte:fragment>` or some other proposal saves this soon...
     */

    li > :global([slot="heading"]) {
        display: contents;
    }
</style>
