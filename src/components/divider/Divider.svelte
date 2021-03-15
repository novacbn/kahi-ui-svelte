<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    export let palette = undefined;
</script>

{#if $$slots["default"]}
    <span {...map_global_attributes($$props)} role="separator" {...map_data_attributes({palette})}>
        <slot />
    </span>
{:else}
    <hr {...map_global_attributes($$props)} {...map_data_attributes({palette})} />
{/if}
