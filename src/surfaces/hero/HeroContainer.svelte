<script>
    import {map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    export let palette = undefined;
    export let size = undefined;
</script>

<div
    {...map_global_attributes($$props)}
    class="hero {_class}"
    data-palette={palette}
    data-size={size}>
    <slot />
</div>
