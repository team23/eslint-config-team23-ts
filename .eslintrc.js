module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    overrides: [
        {
            files: [
                '*.ts',
                '*.tsx',
            ],
            parserOptions: {
                project: 'tsconfig.base.json',
            },
            rules: {
                'no-shadow': 'off',
                '@typescript-eslint/no-redeclare': ['error'],
                '@typescript-eslint/no-parameter-properties': 'off',
                '@typescript-eslint/no-extraneous-class': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/indent': 'off',
                '@typescript-eslint/method-signature-style': 'off',
                '@typescript-eslint/no-namespace': 'off',
                '@typescript-eslint/ban-ts-comment': 'error',
                '@typescript-eslint/explicit-function-return-type': [
                    'error',
                    {
                        allowExpressions: true,
                        allowTypedFunctionExpressions: true,
                        allowHigherOrderFunctions: true,
                        allowDirectConstAssertionInArrowFunctions: true,
                        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
                    },
                ],
                '@typescript-eslint/no-extra-semi': 'error',
                '@typescript-eslint/adjacent-overload-signatures': 'error',
                '@typescript-eslint/array-type': [
                    'error',
                    {
                        default: 'generic',
                    },
                ],
                '@typescript-eslint/ban-types': 'error',
                '@typescript-eslint/consistent-type-assertions': 'error',
                '@typescript-eslint/consistent-type-definitions': 'error',
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {
                        accessibility: 'explicit',
                        overrides: {
                            constructors: 'no-public',
                        },
                    },
                ],
                '@typescript-eslint/member-delimiter-style': [
                    'error',
                    {
                        multiline: {
                            delimiter: 'semi',
                            requireLast: true,
                        },
                        singleline: {
                            delimiter: 'semi',
                            requireLast: false,
                        },
                    },
                ],
                '@typescript-eslint/member-ordering': 'error',
                '@typescript-eslint/no-empty-function': 'error',
                '@typescript-eslint/no-empty-interface': 'error',
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/no-for-in-array': 'error',
                '@typescript-eslint/no-inferrable-types': [
                    'error',
                    {
                        ignoreParameters: true,
                    },
                ],
                '@typescript-eslint/no-misused-new': 'error',
                '@typescript-eslint/no-non-null-assertion': 'error',
                '@typescript-eslint/no-require-imports': 'error',
                '@typescript-eslint/no-shadow': [
                    'error',
                    {
                        hoist: 'all',
                    },
                ],
                '@typescript-eslint/no-this-alias': 'error',
                '@typescript-eslint/no-unused-expressions': [
                    'error',
                    {
                        allowShortCircuit: true,
                        allowTernary: true,
                    },
                ],
                '@typescript-eslint/no-var-requires': 'error',
                '@typescript-eslint/prefer-for-of': 'error',
                '@typescript-eslint/prefer-function-type': 'error',
                '@typescript-eslint/prefer-namespace-keyword': 'error',
                '@typescript-eslint/semi': [
                    'error',
                    'always',
                ],
                '@typescript-eslint/triple-slash-reference': [
                    'error',
                    {
                        path: 'always',
                        types: 'prefer-import',
                        lib: 'always',
                    },
                ],
                '@typescript-eslint/type-annotation-spacing': 'error',
                '@typescript-eslint/unified-signatures': 'error',
                '@typescript-eslint/typedef': 'error',
                '@typescript-eslint/no-dynamic-delete': 'error',
                '@typescript-eslint/dot-notation': ['error', {
                    'allowIndexSignaturePropertyAccess': true,
                }],
                '@typescript-eslint/promise-function-async': 'error',
                '@typescript-eslint/quotes': [
                    'error',
                    'single',
                    {
                        avoidEscape: true,
                    },
                ],
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        args: 'after-used',
                        ignoreRestSiblings: true,
                        argsIgnorePattern: '^_',
                    },
                ],
                '@typescript-eslint/prefer-readonly': 'error',
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'default',
                        format: [
                            'camelCase',
                            'UPPER_CASE',
                            'snake_case',
                            'PascalCase',
                        ],
                        leadingUnderscore: 'allow',
                        filter: {
                            regex: '^(O_o)$',
                            match: false,
                        },
                    },
                    {
                        selector: 'variable',
                        types: [
                            'boolean',
                        ],
                        format: [
                            'PascalCase',
                        ],
                        prefix: [
                            'is',
                            'should',
                            'has',
                            'can',
                            'did',
                            'will',
                            'does',
                            'are',
                            'do',
                        ],
                    },
                    {
                        selector: 'enumMember',
                        format: [
                            'PascalCase',
                        ],
                    },
                    {
                        selector: 'typeLike',
                        format: [
                            'PascalCase',
                        ],
                    },
                    {
                        selector: 'memberLike',
                        modifiers: ['private'],
                        format: ['camelCase'],
                        leadingUnderscore: 'require',
                    },
                    {
                        selector: 'memberLike',
                        modifiers: ['protected'],
                        format: ['camelCase'],
                        leadingUnderscore: 'require',
                    },
                ],
                "no-magic-numbers": "off",
                "@typescript-eslint/no-magic-numbers": [
                    "error",
                    {
                        "ignoreDefaultValues": true,
                        "detectObjects": true,
                        "ignore": [
                            -1,
                            1,
                            0
                        ],
                        "ignoreReadonlyClassProperties": true,
                        "ignoreEnums": true
                    }
                ],
            },
        },
    ],
};
