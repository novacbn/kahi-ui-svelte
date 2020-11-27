<script>
    import {map_global_attributes} from "../../util/attributes";

    export let current = undefined;
    export let href = "";
    export let target = undefined;
</script>

<a {href} {target} aria-current={current} {...map_global_attributes($$props)} on:click>
    <slot />
</a>
