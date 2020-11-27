<script>
    import {map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    export let palette = undefined;
    export let position = undefined;
</script>

<nav
    {...map_global_attributes($$props)}
    class="omni {_class}"
    data-palette={palette}
    data-position={position}>
    <slot />
</nav>
