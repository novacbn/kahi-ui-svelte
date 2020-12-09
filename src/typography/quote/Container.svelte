<script>
    import {map_global_attributes} from "../../util/attributes";

    export let palette = undefined;
</script>

<blockquote {...map_global_attributes($$props)} data-palette={palette}>
    <slot />
</blockquote>
