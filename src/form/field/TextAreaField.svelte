<script>
    import {map_global_attributes} from "../../util/attributes";

    export let disabled = undefined;
    export let placeholder = undefined;
    export let readonly = undefined;

    export let palette = undefined;
    export let shape = undefined;

    export let value = "";
</script>

<textarea
    {...map_global_attributes($$props)}
    data-palette={palette}
    data-shape={shape}
    {disabled}
    {placeholder}
    {readonly}
    bind:value />
