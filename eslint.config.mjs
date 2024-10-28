import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    react: true,
    node: true,
    ignores: [],
  },
  {
    rules: {
      'n/prefer-global/process': ['error', 'always'],
    },
  },
  ...tailwindcss.configs['flat/recommended'],
)
