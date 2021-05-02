<script>
    import Button from "../../components/button/Button.svelte";
    import {map_global_attributes} from "../../util/attributes";

    export let active = undefined;
    export let disabled = undefined;
    export let palette = undefined;
    export let shape = undefined;
    export let size = undefined;
    export let variation = undefined;

    export let name = undefined;
    export let type = undefined;
    export let value = undefined;

    export let href = "";
    export let rel = undefined;
    export let target = undefined;

    export let _for = "";

    export {_for as for};
</script>

<li {...map_global_attributes($$props)} on:click>
    <Button
        for={_for}
        {active}
        {disabled}
        {palette}
        {shape}
        {size}
        {variation}
        {name}
        {type}
        {value}
        {href}
        {rel}
        {target}
    >
        <slot />
    </Button>
</li>
