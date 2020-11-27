<script>
    import {getContext} from "svelte";

    import {map_global_attributes} from "../../util/attributes";

    import {CONTEXT_MENU_ID} from "./MenuContainer.svelte";

    const store_id = getContext(CONTEXT_MENU_ID);

    let _for = undefined;
    export {_for as for};

    $: if (store_id) _for = $store_id;
</script>

{#if _for}
    <li {...map_global_attributes($$props)} on:click>
        <label for={_for}>
            <slot />
        </label>
    </li>
{:else}
    <li {...map_global_attributes($$props)}>
        <label>
            <slot />
        </label>
    </li>
{/if}
