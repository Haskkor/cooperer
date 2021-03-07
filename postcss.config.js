module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 4,
      features: {
        'nesting-rules': true
      }
    })
  ]
};
