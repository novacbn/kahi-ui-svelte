<script>
    import {map_global_attributes} from "../../util/attributes";
    import {DESIGN_HEADINGS} from "../../util/enumerations";

    export let level = DESIGN_HEADINGS.one;

    // NOTE: For supporting passing levels as numbers
    $: _level = level.toString();
</script>

<!--
    NOTE: Would it be more ergonomic to maybe wrap `<Heading level="XXX"></Heading>` with anonymous functions that
    mimic the SvelteComponent Constructor API and automagically assign the `Heading.level` property? E.g. get something
    like `Heading.One`, `Heading.Five`, etc... as the exports
-->

{#if _level === DESIGN_HEADINGS.six}
    <h6 {...map_global_attributes($$props)}>
        <slot />
    </h6>
{:else if _level === DESIGN_HEADINGS.five}
    <h5 {...map_global_attributes($$props)}>
        <slot />
    </h5>
{:else if _level === DESIGN_HEADINGS.four}
    <h4 {...map_global_attributes($$props)}>
        <slot />
    </h4>
{:else if _level === DESIGN_HEADINGS.three}
    <h3 {...map_global_attributes($$props)}>
        <slot />
    </h3>
{:else if _level === DESIGN_HEADINGS.two}
    <h2 {...map_global_attributes($$props)}>
        <slot />
    </h2>
{:else}
    <h1 {...map_global_attributes($$props)}>
        <slot />
    </h1>
{/if}
