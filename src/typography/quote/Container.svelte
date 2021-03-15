<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    export let palette = undefined;
</script>

<blockquote {...map_global_attributes($$props)} {...map_data_attributes({palette})}>
    <slot />
</blockquote>
