module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'object-curly-spacing': [2, 'always'],
  },
};
