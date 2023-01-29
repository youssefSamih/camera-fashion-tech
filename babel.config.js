module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@components': './src/components',
          '@theme': './src/theme',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
