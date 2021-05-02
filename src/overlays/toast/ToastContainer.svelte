<script>
    import Overlay from "../overlay/Overlay.svelte";

    // TODO: How to describe dash variables (alignment-x / alignment-y) as exports
    // while keeping the dashes key names

    export let spacing = undefined;
</script>

<Overlay {...$$props} {spacing}>
    <slot />
</Overlay>
