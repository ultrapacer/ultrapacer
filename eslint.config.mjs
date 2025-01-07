import eslint from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tsdoc from 'eslint-plugin-tsdoc'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    extends: [importPlugin.flatConfigs.recommended],
    plugins: {
      'simple-import-sort': simpleImportSort,
      tsdoc: tsdoc
    },
    rules: {
      'import/first': 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: false }],
      'tsdoc/syntax': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true
      }
    }
  },
  eslintPluginPrettierRecommended
)
