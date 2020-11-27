<script>
    import {map_global_attributes} from "../../util/attributes";

    export let orientation = undefined;
</script>

<div {...map_global_attributes($$props)} class="group" data-orientation={orientation}>
    <slot />
</div>
