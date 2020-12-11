<script>
    import {onMount} from "svelte";

    let portal = null;

    export let prepend = false;
    export let target = typeof window !== "object" ? null : document.body;

    onMount(() => {
        if (typeof target === "string") {
            const element = document.querySelector(target);
            if (!element) {
                throw new ReferenceError(
                    `bad attribute 'target' on 'Portal' (selector '${target}' not found)`
                );
            }

            target = selector;
        }

        if (prepend) target.prepend(portal);
        else target.append(portal);
    });
</script>

<style>
    .portal {
        display: contents;
    }
</style>

<div bind:this={portal} class="portal">
    <slot />
</div>
