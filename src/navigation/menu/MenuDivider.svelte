<script>
    import {map_global_attributes} from "../../util/attributes";
</script>

{#if $$slots['default']}
    <li {...map_global_attributes($$props)}>
        <span role="separator">
            <slot />
        </span>
    </li>
{:else}
    <li {...map_global_attributes($$props)}>
        <hr />
    </li>
{/if}
