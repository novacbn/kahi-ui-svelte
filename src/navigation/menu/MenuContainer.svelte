<script context="module">
    export const CONTEXT_MENU_ID = Symbol.for("kahi-menu-id");

    export const CONTEXT_MENU_STATE = Symbol.for("kahi-menu-state");
</script>

<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    export let palette = undefined;
</script>

<nav {...map_global_attributes($$props)} class="menu {_class}" {...map_data_attributes({palette})}>
    <ul>
        <slot />
    </ul>
</nav>
