<script>
    import {getContext} from "svelte";

    import {map_aria_attributes, map_global_attributes} from "../../util/attributes";

    import {CONTEXT_POPOVER_ID} from "./PopoverContainer.svelte";

    const store_id = getContext(CONTEXT_POPOVER_ID);
</script>

<div
    {...map_global_attributes($$props)}
    {...map_aria_attributes({labelledby: `${$store_id}-button`})}
>
    <slot />
</div>
