module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: 'var(--color-primary)',
  //       secondary: 'var(--color-secondary)',
  //       'primary-text': 'var(--color-text-primary)',
  //       'secondary-text': 'var(--color-text-sec)',
  //       'primary-bg': 'var(--background-primary)',
  //       'secondary-bg': 'var(--background-sec)',
  //     },
  //   },
  // },
};
