<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    export let orientation = undefined;
</script>

<div {...map_global_attributes($$props)} class="group" {...map_data_attributes({orientation})}>
    <slot />
</div>
