const plugin = require('tailwindcss/plugin');
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Screen Breakpoints - Responsive Design
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      
      // Font Families
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      
      // Font Sizes
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '1.4' }],
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      
      // Color Palette - All colors from components
      colors: {
        // Primary Colors
        primary: '#4078BF',
        'primary-dark': '#3467a6',
        'primary-light': '#5b8bcaff',
        'bt-hover': '#5b8bcaff',
        
        // Secondary Colors
        secondary: '#545C66',
        
        // Background Colors
        'gradient': '#EEF7FF',
        'gradient-2': '#BCE3FF',
        'bg-blue': '#D9E4F2',
        'image-bg': '#D9E4F2',
        'page-bg': '#F5F6FA',
        'backgroundbox': 'rgba(84, 92, 102, 0.04)',
        'backboxbackground': 'rgba(0, 0, 0, 0.03)',
        'custom-bg-gray': '#2A3F58',
        'customGray': '#F8F6F5',
        'customBg': 'rgba(84, 92, 102, 0.04)',
        
        // Accent Colors
        'yellow-1': '#FBBC05',
        'green-1': '#00B69B',
        'green-check': '#00B67A',
        'optional-1': '#5C7E8E',
        'optional-2': '#85AAB9',
        'primary-green': '#98C7D6',
        'reviewbar-bg': '#F7EAE2',
        'grey-1': '#959595',
        'grey_button': '#EEEFEF',
        
        // Pricing Section Colors
        'pricing-dark': '#121826',
        'pricing-blue': '#2656FF',
        'pricing-blue-dark': '#1f49d9',
        
        // Star Rating Color
        'star-yellow': '#FFAB00',
      },
      
      // Box Shadows
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
        input: '0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)',
        blueSoft: '0 4px 4px 0 #4285F4',
        'inner': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.3)',
        'cta-button': '0 6px 0 #6EA3FF',
      },
      
      // Outline
      outline: {
        blue: '2px solid rgba(0, 112, 244, 0.5)',
      },
      
      // Border Width
      borderWidth: {
        3: '3px',
      },
      
      // Width
      width: {
        'desktop': '1728px',
      },
      
      // Min Width
      minWidth: {
        36: '9rem',
        44: '11rem',
        56: '14rem',
        60: '15rem',
        72: '18rem',
        80: '20rem',
      },
      
      // Max Width
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '11xl': '112rem',
        '12xl': '120rem',
        '13xl': '128rem',
        'desktop': '1728px',
      },
      
      // Max Height
      maxHeight: {
        '100': '27rem',
        '120': '32rem',
        '140': '48rem',
        '160': '60rem',
        '180': '72rem',
        '200': '84rem',
      },
      
      // Z-Index
      zIndex: {
        60: '60',
      },
      
      // Spacing - Common responsive spacing
      spacing: {
        'section-mobile': '2rem',
        'section-tablet': '3rem',
        'section-desktop': '4rem',
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      }, ['responsive']);
    }),
  ],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
