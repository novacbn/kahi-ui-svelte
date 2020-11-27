<script>
    import {map_global_attributes} from "../../util/attributes";

    export let current = undefined;
    export let href = "";
    export let target = undefined;
</script>

<li {...map_global_attributes($$props)} on:click>
    <a {href} {target} aria-current={current}>
        <slot />
    </a>
</li>
