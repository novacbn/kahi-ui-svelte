<script>
    import {map_global_attributes} from "../../util/attributes";

    export let heading = false;
</script>

{#if heading}
    <th {...map_global_attributes($$props)}>
        <slot />
    </th>
{:else}
    <td {...map_global_attributes($$props)}>
        <slot />
    </td>
{/if}
