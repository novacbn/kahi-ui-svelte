<script>
    import {map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    let _as = "div";

    export {_as as as};

    export let viewport = undefined;
</script>

{#if _as === 'article'}
    <article
        {...map_global_attributes($$props)}
        class="container {_class}"
        data-viewport={viewport}>
        <slot />
    </article>
{:else if _as === 'main'}
    <main {...map_global_attributes($$props)} class="container {_class}" data-viewport={viewport}>
        <slot />
    </main>
{:else}
    <div {...map_global_attributes($$props)} class="container {_class}" data-viewport={viewport}>
        <slot />
    </div>
{/if}
