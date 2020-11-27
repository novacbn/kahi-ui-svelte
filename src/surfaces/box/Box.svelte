<script>
    import {map_global_attributes} from "../../util/attributes";

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
        data-palette={palette}
        data-variation={variation}
        {href}
        {target}>
        <slot />
    </a>
{:else if _for}
    {#if _for === true}
        <label
            {...map_global_attributes($$props)}
            class="box {_class}"
            data-palette={palette}
            data-variation={variation}>
            <slot />
        </label>
    {:else}
        <label
            {...map_global_attributes($$props)}
            class="card {_class}"
            for={_for}
            data-palette={palette}
            data-variation={variation}>
            <slot />
        </label>
    {/if}
{:else}
    <div
        {...map_global_attributes($$props)}
        class="box {_class}"
        data-palette={palette}
        data-variation={variation}>
        <slot />
    </div>
{/if}
