<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    export let palette = undefined;
    export let position = undefined;
</script>

<nav
    {...map_global_attributes($$props)}
    class="omni {_class}"
    {...map_data_attributes({palette, position})}
>
    <slot />
</nav>
