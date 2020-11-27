<script>
    import {map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    export let palette = undefined;

    export let href = "";
    export let target = undefined;

    let _for = undefined;
    export {_for as for};
</script>

{#if href}
    <a
        {...map_global_attributes($$props)}
        class="tile {_class}"
        data-palette={palette}
        {href}
        {target}>
        <slot />
    </a>
{:else if _for}
    {#if _for === true}
        <label {...map_global_attributes($$props)} class="tile {_class}" data-palette={palette}>
            <slot />
        </label>
    {:else}
        <label
            {...map_global_attributes($$props)}
            class="tile {_class}"
            data-palette={palette}
            for={_for}>
            <slot />
        </label>
    {/if}
{:else}
    <div {...map_global_attributes($$props)} class="tile {_class}" data-palette={palette}>
        <slot />
    </div>
{/if}
