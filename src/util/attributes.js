const GLOBAL_DATA_ATTRIBUTES = new Set(["animation", "animation-palette", "hidden"]);

const GLOBAL_HTML_ATTRIBUTES = new Set(["class", "id", "style", "tabindex", "title"]);

export function map_attributes(props, set = null, prefix = null) {
    let entries = Object.entries(props).filter((entry) => {
        const [attribute, value] = entry;

        if (set && !set.has(attribute)) return false;
        return value != undefined;
    });

    if (prefix) {
        entries = entries.map((entry) => {
            const [attribute, value] = entry;

            return [`${prefix}${attribute}`, value];
        });
    }

    return Object.fromEntries(entries);
}

export function map_aria_attributes(props, set = null) {
    return map_attributes(props, set, "aria-");
}

export function map_data_attributes(props, set = null) {
    return map_attributes(props, set, "data-");
}

export function map_global_attributes(props) {
    const data_attributes = map_data_attributes(props, GLOBAL_DATA_ATTRIBUTES);
    const html_attributes = map_attributes(props, GLOBAL_HTML_ATTRIBUTES);

    return {
        ...data_attributes,
        ...html_attributes,
    };
}
