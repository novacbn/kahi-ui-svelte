<script context="module">
    export const CONTEXT_BACKDROP_ID = Symbol.for("kahi-backdrop-id");

    export const CONTEXT_BACKDROP_STATE = Symbol.for("kahi-backdrop-state");
</script>

<script>
    import {setContext} from "svelte";
    import {readable, writable} from "svelte/store";

    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    export let id = undefined;

    // NOTE: While Backdrop does NOT use these attributes, defining them
    // here makes it easier for passthrough
    export let palette = undefined;
    export let viewport = undefined;
    export let state = false;

    let _store_id_set = null;
    const store_id = readable(id, (set) => (_store_id_set = set));
    const store_state = writable(state);

    setContext(CONTEXT_BACKDROP_ID, store_id);
    setContext(CONTEXT_BACKDROP_STATE, store_state);

    $: if (_store_id_set) _store_id_set(id);
    $: store_state.set(state);
</script>

<input {id} class="backdrop" type="checkbox" bind:checked={$store_state} />
<div
    {...map_global_attributes({...$$props, id: undefined})}
    role="dialog"
    {...map_data_attributes({palette, viewport})}
>
    <label for={id} />

    <slot />
</div>
