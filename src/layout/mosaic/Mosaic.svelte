<script>
    import {map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    export let alignment = undefined;
    let _alignment_x = undefined;
    let _alignment_y = undefined;

    export {_alignment_x as alignmentx, _alignment_y as alignmenty};

    export let sizing = undefined;
    export let spacing = undefined;
</script>

<div
    {...map_global_attributes($$props)}
    class="mosaic {_class}"
    data-alignment={alignment}
    data-alignment-x={_alignment_x}
    data-alignment-y={_alignment_y}
    data-sizing={sizing}
    data-spacing={spacing}>
    <slot />
</div>
