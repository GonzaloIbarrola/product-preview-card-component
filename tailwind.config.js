/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imageDesktop' : 'url(/src/assets/image-product-desktop.jpg)'
      },
      colors: {
        'Pure-White' : '#FFFFFF',
        'Cream' : '#F2EAE2',
        'Aurometal-Saurus' : '#6C7289',
        'Deep-Aquamarine' : '#3D8168',
        'Deep-Aquamarine-HOVER' : '#1A4032',
        'Gunmetal' : '#1C232B',
      },
      fontFamily: {
        'fraunces' : ['Fraunces', 'serif'],
        'montserrat' : ['Montserrat', 'sans-serif']
      },
      fontSize: {
        'Display' : ['32px', {
          fontWeight: '700',
          lineHeight: '32px',
        }],
        'Body' : ['14px', {
          fontWeight: '500',
          lineHeight: '23px',
        }],
        'Button' : ['14px', {
          fontWeight: '700',
          lineHeight: '17px',
        }],
        'Overline' : ['12px', {
          fontWeight: '500',
          lineHeight: '15px',
          letterSpacing: '5px'
        }],
      },
      screens: {
        'mobile' : '375px',
        'desktop' : '640px',
      },
    },
  },
  plugins: [],
}

