<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    let _class = "";
    export {_class as class};

    export let palette = undefined;
    export let position = undefined;
    export let size = undefined;
    export let shape = undefined;
    export let variation = undefined;
</script>

<span
    class="badge {_class}"
    {...map_global_attributes($$props)}
    {...map_data_attributes({palette, position, shape, size, variation})}
>
    <slot />
</span>
