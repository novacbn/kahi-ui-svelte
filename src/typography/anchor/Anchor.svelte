<script>
    import {
        map_aria_attributes,
        map_attributes,
        map_global_attributes,
    } from "../../util/attributes";

    export let download = undefined;
    export let current = undefined;
    export let href = "";
    export let rel = undefined;
    export let target = undefined;
</script>

<a
    {...map_global_attributes($$props)}
    {...map_aria_attributes({current})}
    {...map_attributes({download, href, rel, target})}
    on:click
>
    <slot />
</a>
