<script>
    import {getContext} from "svelte";

    import {map_global_attributes} from "../../util/attributes";

    import {CONTEXT_POPOVER_ID} from "./PopoverContainer.svelte";

    const store_id = getContext(CONTEXT_POPOVER_ID);
</script>

<div {...map_global_attributes($$props)} aria-labelledby="{$store_id}-button">
    <slot />
</div>
