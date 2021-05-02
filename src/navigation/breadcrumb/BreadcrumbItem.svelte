<script>
    import {map_global_attributes} from "../../util/attributes";
</script>

<li {...map_global_attributes($$props)} on:click>
    <slot />
</li>
