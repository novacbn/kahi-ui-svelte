<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    export let palette = undefined;
</script>

<nav {...map_global_attributes($$props)} class="aside {_class}" {...map_data_attributes({palette})}>
    <slot />
</nav>
