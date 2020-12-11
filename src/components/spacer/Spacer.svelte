<script>
    import {map_global_attributes} from "../../util/attributes";

    let _class = "";
    export {_class as class};

    export let inline = false;
    export let spacing = undefined;
</script>

{#if inline}
    <span {...map_global_attributes($$props)} class="spacer {_class}" data-spacing={spacing} />
{:else}
    <div {...map_global_attributes($$props)} class="spacer {_class}" data-spacing={spacing} />
{/if}
