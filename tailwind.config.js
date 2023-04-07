/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
// Rotate X utilities
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
})

const perspective = plugin(function ({ addUtilities }) {
  addUtilities({
    '.perspective-1000': {
      perspective: '1000px',
    },
  })
})

const transformStyle = plugin(function ({ addUtilities }) {
  addUtilities({
    '.transformStyle-3d': {
      transformStyle: 'preserve-3d',
    },
  })
})

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    '.backfaceVisibility-hidden': {
      backfaceVisibility: 'hidden',
    },
  })
})

module.exports = {
  purge: [],
  purge: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {'wave': '1000px 100px', 'card': '100% 100%'},
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/picture/herobg.png')",
        "banner-pattern": "url('/picture/banner-bg.png')",
        "card-pattern-1": "url('/picture/card/card_pic_1.jpg')",
        "card-pattern-2": "url('/picture/card/card_pic_2.jpg')",
        "card-pattern-3": "url('/picture/card/card_pic_3.jpg')",
        "card-pattern-4": "url('/picture/card/card_pic_4.jpg')",
        "card-pattern-5": "url('/picture/card/card_pic_5.jpg')",
        "card-pattern-6": "url('/picture/card/card_pic_6.jpg')",
        "card-pattern-7": "url('/picture/card/card_pic_7.jpg')",
        "card-pattern-8": "url('/picture/card/card_pic_8.jpg')",
        "card-pattern-9": "url('/picture/card/card_pic_9.jpg')",
        "card-pattern-10": "url('/picture/card/card_pic_10.jpg')",
        "card-pattern-11": "url('/picture/card/card_pic_11.jpg')",
        "card-pattern-12": "url('/picture/card/card_pic_12.jpg')",
        "footer-pattern": "url('/picture/wave.png')",
      },
      keyframes: {
        'wave-show': {
          '0%': {
            backgroundPosition: '3000px 0px'
          },
          '100%': {
            backgroundPosition: '0px 0px'
          }
        },
        'wave-reverse': {
          '0%': {
            backgroundPosition: '0px 0px'
          },
          '100%': {
            backgroundPosition: '3000px 0px'
          }
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        "wave": 'wave-show 30s linear infinite',
        "wave-reverse": 'wave-reverse 10s linear infinite',
        "wave-slow": 'wave-show 9s linear infinite',
        "wave-reverse-slow": 'wave-reverse 9s linear infinite',
       }
    },
  },
  variants: {
     extend: {},
  },
  plugins: [require("daisyui"), rotateY, perspective, transformStyle, backfaceVisibility],
}
