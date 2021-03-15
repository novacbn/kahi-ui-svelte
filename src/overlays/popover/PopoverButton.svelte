<script>
    import {getContext} from "svelte";

    import {
        map_aria_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../util/attributes";

    import {CONTEXT_POPOVER_ID, CONTEXT_POPOVER_STATE} from "./PopoverContainer.svelte";

    const store_id = getContext(CONTEXT_POPOVER_ID);
    const store_state = getContext(CONTEXT_POPOVER_STATE);

    let _for = undefined;
    export let palette = undefined;
    export let size = undefined;
    export let variation = undefined;

    export {_for as for};

    $: if (store_id) _for = $store_id;
</script>

<label
    {...map_global_attributes($$props)}
    id="{$store_id}-button"
    role="button"
    for={_for}
    {...map_data_attributes({palette, size, variation})}
    {...map_aria_attributes({expanded: $store_state})}
    on:click
>
    <slot />
</label>
