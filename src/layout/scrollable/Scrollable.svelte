<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    // TODO: How to describe dash variables (overflow-x / overflow-y) as exports
    // while keeping the dashes key names
</script>

<div
    {...map_global_attributes($$props)}
    class="scrollable {_class}"
    {...map_data_attributes({
        "overflow-x": $$props["overflow-x"],
        "overflow-y": $$props["overflow-y"],
    })}
>
    <slot />
</div>
