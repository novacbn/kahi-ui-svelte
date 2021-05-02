<script>
    import {map_data_attributes, map_global_attributes} from "../../util/attributes";

    let _class = "";

    export {_class as class};

    export let level = undefined;
</script>

<ul
    {...map_global_attributes($$props)}
    class="breadcrumb {_class}"
    {...map_data_attributes({level})}
>
    <slot />
</ul>
