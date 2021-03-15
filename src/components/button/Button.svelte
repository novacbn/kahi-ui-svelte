<script>
    import {
        map_aria_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../util/attributes";

    export let active = undefined;
    export let disabled = undefined;
    export let palette = undefined;
    export let size = undefined;
    export let shape = undefined;
    export let variation = undefined;

    export let name = undefined;
    export let type = undefined;
    export let value = undefined;

    export let href = "";
    export let target = undefined;

    export let _for = "";

    export {_for as for};
</script>

{#if href}
    <a
        {...map_global_attributes($$props)}
        role="button"
        {...map_data_attributes({palette, size, variation})}
        {...map_aria_attributes({active, disabled})}
        {href}
        {target}
        on:click
    >
        <slot />
    </a>
{:else if _for}
    {#if _for === true}
        <label
            {...map_global_attributes($$props)}
            role="button"
            {...map_data_attributes({palette, shape, size, variation})}
            {...map_aria_attributes({disabled, pressed: active})}
            on:click
        >
            <slot />
        </label>
    {:else}
        <label
            {...map_global_attributes($$props)}
            role="button"
            for={_for}
            {...map_data_attributes({palette, shape, size, variation})}
            {...map_aria_attributes({disabled, pressed: active})}
            on:click
        >
            <slot />
        </label>
    {/if}
{:else if value}
    {#if type === "submit"}
        <input
            {...map_global_attributes($$props)}
            type="submit"
            {...map_data_attributes({palette, shape, size, variation})}
            {...map_aria_attributes({pressed: active})}
            {disabled}
            {name}
            {value}
            on:click
        />
    {:else}
        <input
            {...map_global_attributes($$props)}
            type="button"
            {...map_data_attributes({palette, shape, size, variation})}
            {...map_aria_attributes({pressed: active})}
            {disabled}
            {name}
            {value}
            on:click
        />
    {/if}
{:else}
    <button
        {...map_global_attributes($$props)}
        {...map_data_attributes({palette, shape, size, variation})}
        {...map_aria_attributes({pressed: active})}
        {disabled}
        on:click
    >
        <slot />
    </button>
{/if}
