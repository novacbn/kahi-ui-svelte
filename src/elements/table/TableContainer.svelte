<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    export let variation = undefined;
</script>

<table {...map_global_attributes($$props)} {...map_data_attributes({variation})}>
    <slot />
</table>
