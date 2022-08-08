module.exports = {
  content: [
    'src/app/components/**/*.{html,ts,css}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000',
      'white': '#fff',
      'brand': {
        'main': {
          DEFAULT: '#F8AD9D',
          'muted': 'rgba(248, 173, 157, 0.14)',
          'hover': '#F7A08D'
        },
        'secondary': {
          DEFAULT: '#51727B',
          'muted': 'rgba(81, 114, 123, 0.14)',
          'hover': '#49676F'
        },
        'accent': {
          DEFAULT: '#F4978E',
          'muted': 'rgba(244,151,142,0.14)',
          'hover': '#F2877D'
        },
        'shade': {
          DEFAULT: '#F08080',
          'muted': 'rgba(240,128,128,0.14)',
          'hover': '#EE6D6D'
        },
        'background': {
          DEFAULT: '#F5F5F5',
          'muted': 'rgba(245,245,245,0.14)',
          'hover': '#EBEBEB',
        },
      },
      'utility': {
        'primary': {
          DEFAULT: '#2B478C',
          'muted': 'rgba(43,71,140,0.14)',
        },
        'secondary': {
          DEFAULT: '#5F585A',
          'muted': 'rgba(95,88,90,0.14)',
        },
        'danger': {
          DEFAULT: '#EB5E55',
          'muted': 'rgba(235,94,85,0.14)',
        },
        'info': {
          DEFAULT: '#6C91C2',
          'muted': 'rgba(108,145,194,0.14)',
        },
        'warning': {
          DEFAULT: '#FEB95F',
          'muted': 'rgba(254,185,95,0.14)',
        },
        'success': {
          DEFAULT: '#5C9962',
          'muted': 'rgba(92,153,98,0.14)',
        },
      },
      'rainbow': {
        'red': {
          DEFAULT: '#EB5E55',
          'muted': 'rgba(235,94,85,0.14)',
        },
        'orange': {
          DEFAULT: '#F58C5A',
          'muted': 'rgba(245,140,90,0.14)',
        },
        'yellow-orange': {
          DEFAULT: '#FAA35D',
          'muted': 'rgba(250,163,93,0.14)',
        },
        'yellow': {
          DEFAULT: '#FEB95F',
          'muted': 'rgba(254,185,95,0.14)',
        },
        'yellow-green': {
          DEFAULT: '#BFB672',
          'muted': 'rgba(191,182,114,0.14)',
        },
        'green': {
          DEFAULT: '#5C9962',
          'muted': 'rgba(92,153,98,0.14)',
        },
        'light-blue': {
          DEFAULT: '#6C91C2',
          'muted': 'rgba(108,145,194,0.14)',
        },
        'blue': {
          DEFAULT: '#2B478C',
          'muted': 'rgba(43,71,140,0.14)',
        },
        'purple': {
          DEFAULT: '#565290',
          'muted': 'rgba(86,82,144,0.14)',
        },
        'lilac': {
          DEFAULT: '#805D93',
          'muted': 'rgba(128,93,147,0.14)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
