<script context="module">
    export const CONTEXT_POPOVER_ID = Symbol.for("kahi-popover-id");

    export const CONTEXT_POPOVER_STATE = Symbol.for("kahi-popover-state");
</script>

<script>
    import {setContext} from "svelte";
    import {readable, writable} from "svelte/store";

    import {click_outside} from "../../util/actions";
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    let _class = "";
    export let id = undefined;

    export {_class as class};

    export let position = undefined;
    export let sizing = undefined;
    export let state = false;

    let _store_id_set = null;
    const store_id = readable(id, (set) => (_store_id_set = set));
    const store_state = writable(state);

    function on_click_outside(event) {
        $store_state = false;
    }

    setContext(CONTEXT_POPOVER_ID, store_id);
    setContext(CONTEXT_POPOVER_STATE, store_state);

    $: if (_store_id_set) _store_id_set(id);
    $: store_state.set(state);
</script>

<div
    {...map_global_attributes({...$$props, id: undefined})}
    class="popover {_class}"
    {...map_data_attributes({position, sizing})}
    use:click_outside={on_click_outside}
>
    <input {id} type="checkbox" bind:checked={$store_state} />

    <slot />
</div>
