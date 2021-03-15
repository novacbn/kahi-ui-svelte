<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    export let palette = undefined;

    export let href = "";
    export let rel = undefined;
    export let target = undefined;

    let _for = undefined;
    export {_for as for};
</script>

{#if href}
    <a
        {...map_global_attributes($$props)}
        class="tile {_class}"
        {...map_data_attributes({palette})}
        {...map_attributes({href, rel, target})}
    >
        <slot />
    </a>
{:else if _for}
    {#if _for === true}
        <label
            {...map_global_attributes($$props)}
            class="tile {_class}"
            {...map_data_attributes({palette})}
        >
            <slot />
        </label>
    {:else}
        <label
            {...map_global_attributes($$props)}
            class="tile {_class}"
            for={_for}
            {...map_data_attributes({palette})}
        >
            <slot />
        </label>
    {/if}
{:else}
    <div
        {...map_global_attributes($$props)}
        class="tile {_class}"
        {...map_data_attributes({palette})}
    >
        <slot />
    </div>
{/if}
