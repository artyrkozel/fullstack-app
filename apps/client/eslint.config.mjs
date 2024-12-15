import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser'; 

export default [
    js.configs.recommended,

    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {},
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2021, 
                sourceType: 'module',
            },
        },
        rules: {
            'no-undef': 'off',
            'no-unused-vars': 'off',
        },
        settings: {},
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            '@typescript-eslint': typescriptPlugin,
        },
        languageOptions: {
            parser: typescriptParser,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            // 'no-undef': 'off',
            'no-unused-vars': 'off',
        },
    },
    {
        ignores: ['.next/**'],
    },
];
