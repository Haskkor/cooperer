module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ],
    'at-rule-empty-line-before': null,
    'comment-empty-line-before': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-block-trailing-semicolon': null,
    'declaration-empty-line-before': null,
    'declaration-colon-newline-after': null,
    'rule-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'no-descending-specificity': null,
    'value-keyword-case': null,
    'max-empty-lines': null,
    indentation: 2
  }
};
