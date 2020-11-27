<script>
    import {map_global_attributes} from "../../util/attributes";

    export let palette = undefined;
</script>

{#if $$slots['default']}
    <span {...map_global_attributes($$props)} role="separator" data-palette={palette}>
        <slot />
    </span>
{:else}
    <hr {...map_global_attributes($$props)} data-palette={palette} />
{/if}
