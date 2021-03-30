<script context="module">
    export const TEXT_TYPES = {
        email: "email",
        password: "password",
        text: "text",
        search: "search",
        url: "url",
    };
</script>

<script>
    import {
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../util/attributes";

    export let disabled = undefined;
    export let placeholder = undefined;
    export let readonly = undefined;

    export let palette = undefined;
    export let shape = undefined;

    export let value = "";
    export let type = "text";
</script>

{#if type === "email"}
    <input
        type="email"
        {...map_global_attributes($$props)}
        {...map_data_attributes({palette, shape})}
        {...map_attributes({disabled, placeholder, readonly})}
        bind:value
    />
{:else if type === "password"}
    <input
        type="password"
        {...map_global_attributes($$props)}
        {...map_data_attributes({palette, shape})}
        {...map_attributes({disabled, placeholder, readonly})}
        bind:value
    />
{:else if type === "search"}
    <input
        type="search"
        {...map_global_attributes($$props)}
        {...map_data_attributes({palette, shape})}
        {...map_attributes({disabled, placeholder, readonly})}
        bind:value
    />
{:else if type === "text"}
    <input
        type="text"
        {...map_global_attributes($$props)}
        {...map_data_attributes({palette, shape})}
        {...map_attributes({disabled, placeholder, readonly})}
        bind:value
    />
{:else if type === "url"}
    <input
        type="url"
        {...map_global_attributes($$props)}
        {...map_data_attributes({palette, shape})}
        {...map_attributes({disabled, placeholder, readonly})}
        bind:value
    />
{/if}
