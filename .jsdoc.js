module.exports = {
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": ["jsdoc"]
    },
    "source": {
        "include": [".", "README.md"],
        "includePattern": "\\.(js)$",
        "excludePattern": "(node_modules/|docs)"
    },
    "plugins": [
        "plugins/markdown", "node_modules/jsdoc-vuejs"
    ],
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": true,
        "useLongnameInNav": false,
        "showInheritedInNav": true
    },
    "opts": {
        "destination": "./docs/",
        "encoding": "utf8",
        "private": true,
        "recurse": true,
        "template": "./node_modules/minami"
    }
}
