<script>
    import {map_global_attributes} from "../../util/attributes";

    let _class = "";
    export {_class as class};

    export let spacing = undefined;
</script>

<div {...map_global_attributes($$props)} class="spacer {_class}" data-spacing={spacing} />
