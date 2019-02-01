module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "commonjs": true
    },
    "extends": ["eslint:recommended", "plugin:prettier/recommended", "plugin:you-dont-need-lodash-underscore/compatible"],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "no-console": 0,
        eqeqeq: 'error',
        "no-loops/no-loops": 2,
        "unicorn/catch-error-name": [
            "error",
            {
                "name": "error"
            }
        ],
        "unicorn/explicit-length-check": "error",
        // "unicorn/filename-case": [
        //     "error",
        //     {
        //         "case": "kebabCase"
        //     }
        // ],
        "unicorn/no-abusive-eslint-disable": "error",
        "unicorn/no-process-exit": "error",
        "unicorn/throw-new-error": "error",
        "unicorn/number-literal-case": "error",
        "unicorn/escape-case": "error",
        "unicorn/no-array-instanceof": "error",
        "unicorn/no-new-buffer": "error",
        "unicorn/no-hex-escape": "error",
        "unicorn/custom-error-definition": "off",
        "unicorn/prefer-starts-ends-with": "error",
        "unicorn/prefer-type-error": "error",
        "unicorn/no-fn-reference-in-iterator": "off",
        "unicorn/import-index": "error",
        "unicorn/new-for-builtins": "error",
        "unicorn/regex-shorthand": "error",
        "unicorn/prefer-spread": "error",
        "unicorn/error-message": "error",
        "unicorn/no-unsafe-regex": "off",
        "unicorn/prefer-add-event-listener": "error",
        "unicorn/no-console-spaces": "error",
        "unicorn/no-unreadable-array-destructuring": "error",
        "unicorn/no-unused-properties": "off",
        "unicorn/prefer-node-append": "error",
        "unicorn/prefer-query-selector": "error",
        "jsdoc/check-examples": 1,
        "jsdoc/check-param-names": 1,
        "jsdoc/check-tag-names": 0,
        "jsdoc/check-types": 1,
        "jsdoc/newline-after-description": 1,
        "jsdoc/no-undefined-types": 1,
        "jsdoc/require-description": 1,
        "jsdoc/require-description-complete-sentence": 1,
        "jsdoc/require-example": 0,
        "jsdoc/require-hyphen-before-param-description": 1,
        "jsdoc/require-param": 1,
        "jsdoc/require-param-description": 1,
        "jsdoc/require-param-name": 1,
        "jsdoc/require-param-type": 1,
        "jsdoc/require-returns": 1,
        "jsdoc/require-returns-check": 0,
        "jsdoc/require-returns-description": 0,
        "jsdoc/require-returns-type": 1,
        "jsdoc/valid-types": 1,
        "prettier/prettier": ["error", { "semi": false }]
    },
    "plugins": [
        "no-loops", "unicorn", "jsdoc"
    ]
};
