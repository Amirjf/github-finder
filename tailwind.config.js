module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        night: {
          ...require('daisyui/src/colors/themes')['[data-theme=night]'],
          neutral: '#212a46',
          secondary: '#3476f5',
        },
      },
    ],
  },
};
