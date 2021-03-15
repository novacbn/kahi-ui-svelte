<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    export let disabled = undefined;
    export let placeholder = undefined;
    export let readonly = undefined;

    export let palette = undefined;
    export let shape = undefined;

    export let value = "";
</script>

<input
    {...map_global_attributes($$props)}
    type="text"
    {disabled}
    {placeholder}
    {readonly}
    {...map_data_attributes({palette, shape})}
    bind:value
/>
