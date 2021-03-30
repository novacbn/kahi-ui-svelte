<script>
    import {
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../util/attributes";

    export let cite = undefined;
    export let palette = undefined;
</script>

<blockquote
    {...map_global_attributes($$props)}
    {...map_attributes({cite})}
    {...map_data_attributes({palette})}
>
    <slot />
</blockquote>
