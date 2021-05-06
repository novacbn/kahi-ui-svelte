<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    export let palette = undefined;
    export let variation = undefined;

    export let href = "";
    export let target = undefined;

    let _for = "";
    export {_for as for};
</script>

{#if href}
    <a
        {...map_global_attributes($$props)}
        class="box {_class}"
        {...map_data_attributes({palette, variation})}
        {href}
        {target}
    >
        <slot />
    </a>
{:else if _for}
    {#if _for === true}
        <label
            {...map_global_attributes($$props)}
            class="box {_class}"
            {...map_data_attributes({palette, variation})}
        >
            <slot />
        </label>
    {:else}
        <label
            {...map_global_attributes($$props)}
            class="box {_class}"
            for={_for}
            {...map_data_attributes({palette, variation})}
        >
            <slot />
        </label>
    {/if}
{:else}
    <div
        {...map_global_attributes($$props)}
        class="box {_class}"
        {...map_data_attributes({palette, variation})}
    >
        <slot />
    </div>
{/if}
