<script>
    import {map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    export let palette = undefined;
</script>

<nav {...map_global_attributes($$props)} class="aside {_class}" data-palette={palette}>
    <slot />
</nav>
