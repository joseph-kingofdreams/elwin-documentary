/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: ['./src/**/*.{astro,html,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: ['"Open Sans"', 'sans-serif'],
            display: ['"Gilroy-Bold"', 'sans-serif']
        },
    },
    plugins: [
        plugin(function ({ addBase, addUtilities, theme }) {
            addBase({
                '*': {
                    boxSizing: 'border-box',
                },
                'body, h1, h2, h3, h4, h5, h6, p, a, h1-b, h2-b, h3-b, h4-b, h5-b, h6-b, p-l, pl-b, p-b, p-s, ps-b, p-xs, pxs-b, img': {
                    display: 'block',
                    margin: 0,
                    fontWeight: 400,
                    color: theme('colors.neutral.950'),
                },
                body: {
                    minHeight: '100vh',
                    fontSize: '1rem', // 16px
                    lineHeight: '1.5rem', // 24px
                },

                // Heading 1 / Bold
                'h1, h1-b': {
                    fontSize: '2.25rem', // 36px
                    lineHeight: '2.75rem', // 44px
                },

                // Heading 2 / Bold 
                'h2, h2-b': {
                    fontSize: '2rem', // 32px
                    lineHeight: '2.4375rem', // 39px
                },

                // Heading 3 / Bold 
                'h3, h3-b': {
                    fontSize: '1.8125rem', // 29px
                    lineHeight: '2.1875rem', // 35px
                },

                // Heading 4 / Bold 
                'h4, h4-b': {
                    fontSize: '1.625rem', // 26px
                    lineHeight: '2rem', // 32px
                },

                // Heading 5 / Bold 
                'h5, h5-b': {
                    fontSize: '1.4375rem', // 23px
                    lineHeight: '1.75rem', // 28px
                },

                // Heading 6 / Bold 
                'h6, h6-b': {
                    fontSize: '1.25rem', // 20px
                    lineHeight: '1.5rem', // 24px
                },

                // Large Paragraph / Bold 
                'p-l, pl-b': {
                    fontSize: '1.125rem', // 18px
                    lineHeight: '1.6875rem', // 27px
                },

                // Paragraph / Regular / Base 
                'p, p-b, a, td, th, button': {
                    fontSize: '1rem', // 16px
                    lineHeight: '1.5rem', // 24px
                },

                // Small Paragraph / Bold 
                'p-s, ps-b': {
                    fontSize: '0.875rem', // 14px
                    lineHeight: '1.3125rem', // 21px
                },

                // XSmall Paragraph / Bold 
                'p-xs, pxs-b': {
                    fontSize: '0.75rem', // 12px
                    lineHeight: '1.125rem', // 18px
                },

                // Bold / Emphasized  
                'b, strong, h1-b, h2-b, h3-b, h4-b, h5-b, h6-b, pl-b, p-b, ps-b, pxs-b': {
                    fontWeight: 600,
                },

                // Hyperlinks / Text Buttons 
                a: {
                    display: 'inline-block', // Enables line-height property for custom/anchor tags 
                    textDecoration: 'none',
                },
            })
            addUtilities({
                // Scrollbar Styling
                '*::-webkit-scrollbar': {
                    height: '1rem',
                    width: '1rem',
                },
                '*::-webkit-scrollbar-thumb': {
                    background: 'linear-gradient(180deg, rgba(248,213,67,1) 0%, rgba(234,136,37,1) 66.66%, rgba(219,59,7,1) 100%, rgba(234,136,37,1) 333%)',
                    border: '0.25rem solid rgba(0, 0, 0, 0)',
                    backgroundClip: 'padding-box',
                    borderRadius: '1rem',
                },
                '*::-webkit-scrollbar-track-piece': {
                    backgroundColor: 'black',
                },
                '*::-webkit-scrollbar-track': {
                    backgroundColor: 'rgba(0,0,0,0)',
                },
                /* Chrome, Safari and Opera */
                '.no-scrollbar::-webkit-scrollbar': {
                    display: 'none',
                },
                '.no-scrollbar': {
                    '-ms-overflow-style': 'none',
                    /* IE and Edge */
                    'scrollbar-width': 'none',
                    /* Firefox */
                },
            })
        })
    ]
}
