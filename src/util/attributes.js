const GLOBAL_DATA_ATTRIBUTES = ["animation", "animation-palette", "hidden"].map(
    (attribute, index) => {
        return [attribute, "data-" + attribute];
    }
);

const GLOBAL_HTML_ATTRIBUTES = ["class", "id", "style", "tabindex", "title"].map(
    (attribute, index) => {
        return [attribute, attribute];
    }
);

const GLOBAL_ATTRIBUTES = Object.fromEntries([
    ...GLOBAL_HTML_ATTRIBUTES,
    ...GLOBAL_DATA_ATTRIBUTES,
]);

export function map_global_attributes(props) {
    let entries = Object.entries(props).filter((entry, index) => {
        const [property] = entry;

        return GLOBAL_ATTRIBUTES[property];
    });

    entries = entries.map((entry, index) => {
        const [property, value] = entry;
        const data_attribute = GLOBAL_ATTRIBUTES[property];

        return [data_attribute, value];
    });

    return Object.fromEntries(entries);
}
