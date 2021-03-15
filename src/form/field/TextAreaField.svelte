<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    export let disabled = undefined;
    export let placeholder = undefined;
    export let readonly = undefined;

    export let palette = undefined;

    export let value = "";
</script>

<textarea
    {...map_global_attributes($$props)}
    {...map_data_attributes({palette})}
    {disabled}
    {placeholder}
    {readonly}
    bind:value
/>
