<script>
    import {map_global_attributes} from "../../util/attributes";
    import {DESIGN_LOADERS} from "../../util/enumerations";

    let _class = "";
    export {_class as class};

    export let palette = undefined;
    export let size = undefined;
    export let variation = DESIGN_LOADERS.await;
</script>

{#if variation === DESIGN_LOADERS.wave}
    <div
        {...map_global_attributes($$props)}
        class="loader {_class}"
        data-palette={palette}
        data-size={size}
        data-variation={DESIGN_LOADERS.wave}>
        <span /><span /><span /><span /><span />
    </div>
{:else}
    <div
        {...map_global_attributes($$props)}
        class="loader {_class}"
        data-palette={palette}
        data-size={size}
        data-variation={DESIGN_LOADERS.await}>
        <span /><span /><span />
        <span /><span />
        <span /><span /><span /><span />
    </div>
{/if}
