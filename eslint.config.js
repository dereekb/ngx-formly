const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = [
    {
        ignores: [
            "src/schematics/**/*.d.ts",
            "demo/src/assets/stackblitz/**/*.ts",
            "**/cypress.config.ts",
            ".eslintignore"
        ]
    },
    ...compat.config({
        overrides: [
            {
                files: ["*.ts"],
                extends: [
                    "plugin:@typescript-eslint/recommended",
                    "plugin:@angular-eslint/recommended",
                    "plugin:@angular-eslint/template/process-inline-templates"
                ],
                parserOptions: {
                    project: ["tsconfig.json", "tsconfig.spec.json", "cypress/tsconfig.json"],
                    createDefaultProgram: true
                },
                rules: {
                    "@typescript-eslint/no-empty-interface": 0,
                    "@typescript-eslint/no-empty-function": 0,
                    "@angular-eslint/component-selector": [
                        "error",
                        {
                            "prefix": "formly",
                            "style": "kebab-case",
                            "type": "element"
                        }
                    ],
                    "@angular-eslint/directive-selector": [
                        "error",
                        {
                            "prefix": "formly",
                            "style": "camelCase",
                            "type": "attribute"
                        }
                    ],
                    "@angular-eslint/no-conflicting-lifecycle": "off",
                    "@angular-eslint/directive-class-suffix": "off",
                    "@angular-eslint/component-class-suffix": "off",
                    "@typescript-eslint/no-explicit-any": "warn",
                    "@typescript-eslint/no-empty-object-type": "warn",
                    "@typescript-eslint/no-require-imports": "warn",
                    "@typescript-eslint/no-unused-expressions": "warn",
                    "@typescript-eslint/no-unused-vars": [
                        "warn",
                        {
                            "argsIgnorePattern": "^_",
                            "varsIgnorePattern": "^_"
                        }
                    ],
                    "@angular-eslint/prefer-standalone": ["off"]    // Messes with the standalone: false components
                }
            },
            {
                files: ["*.html"],
                extends: ["plugin:@angular-eslint/template/recommended"],
                rules: {
                    "@angular-eslint/template/eqeqeq": [
                        "warn",
                        {
                            "allowNullOrUndefined": true
                        }
                    ]
                }
            }
        ]
    })
];
