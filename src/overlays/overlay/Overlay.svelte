<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    // TODO: How to describe dash variables (alignment-x / alignment-y) as exports
    // while keeping the dashes key names

    export let spacing = undefined;
</script>

<div
    {...map_global_attributes($$props)}
    class="overlay {_class}"
    {...map_data_attributes({
        spacing,
        "alignment-x": $$props["alignment-x"],
        "alignment-y": $$props["alignment-y"],
    })}
>
    <slot />
</div>
