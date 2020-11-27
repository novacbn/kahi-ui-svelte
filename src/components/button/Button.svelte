<script>
    import {map_global_attributes} from "../../util/attributes";

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
        data-palette={palette}
        data-size={size}
        data-variation={variation}
        aria-disabled={disabled}
        aria-pressed={active}
        {href}
        {target}
        on:click>
        <slot />
    </a>
{:else if _for}
    {#if _for === true}
        <label
            {...map_global_attributes($$props)}
            role="button"
            data-palette={palette}
            data-size={size}
            data-shape={shape}
            data-variation={variation}
            aria-disabled={disabled}
            aria-pressed={active}
            on:click>
            <slot />
        </label>
    {:else}
        <label
            {...map_global_attributes($$props)}
            role="button"
            for={_for}
            data-palette={palette}
            data-size={size}
            data-shape={shape}
            data-variation={variation}
            aria-disabled={disabled}
            aria-pressed={active}
            on:click>
            <slot />
        </label>
    {/if}
{:else if value}
    {#if type === 'submit'}
        <input
            {...map_global_attributes($$props)}
            type="submit"
            data-palette={palette}
            data-size={size}
            data-shape={shape}
            data-variation={variation}
            aria-pressed={active}
            {disabled}
            {name}
            {value}
            on:click />
    {:else}
        <input
            {...map_global_attributes($$props)}
            type="button"
            data-palette={palette}
            data-size={size}
            data-shape={shape}
            data-variation={variation}
            aria-pressed={active}
            {disabled}
            {name}
            {value}
            on:click />
    {/if}
{:else}
    <button
        {...map_global_attributes($$props)}
        data-palette={palette}
        data-size={size}
        data-shape={shape}
        data-variation={variation}
        aria-pressed={active}
        {disabled}
        on:click>
        <slot />
    </button>
{/if}
