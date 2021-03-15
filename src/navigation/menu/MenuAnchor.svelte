<script>
    import {
        map_aria_attributes,
        map_attributes,
        map_global_attributes,
    } from "../../util/attributes";

    export let current = undefined;
    export let href = "";
    export let rel = undefined;
    export let target = undefined;
</script>

<li {...map_global_attributes($$props)} on:click>
    <a {...map_aria_attributes({current})} {...map_attributes({href, rel, target})}>
        <slot />
    </a>
</li>
