<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    export let palette = undefined;
</script>

<div
    {...map_global_attributes($$props)}
    class={_class}
    role="status"
    {...map_data_attributes({palette})}
>
    <slot />
</div>
