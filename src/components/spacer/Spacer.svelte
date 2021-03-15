<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    let _class = "";
    export {_class as class};

    export let inline = false;
    export let spacing = undefined;
</script>

{#if inline}
    <span
        {...map_global_attributes($$props)}
        class="spacer {_class}"
        {...map_data_attributes({spacing})}
    />
{:else}
    <div
        {...map_global_attributes($$props)}
        class="spacer {_class}"
        {...map_data_attributes({spacing})}
    />
{/if}
