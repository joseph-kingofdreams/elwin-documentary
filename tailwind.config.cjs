/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        boxShadow: ({ theme }) => ({
            sm: '0 6px 18px rgba(36, 38, 46, 0.06)',
            DEFAULT: `0.125rem 0.25rem 0 ${theme('colors.primary.800')}`,
            inner: `inset 0.125rem 0.25rem 0 ${theme('colors.primary.700')}`,
            none: '0 0 #0000',
        }),
        fontFamily: {
            sans: ['"Open Sans"', 'sans-serif'],
            display: ['"Gilroy-Bold"', '"Open Sans"', 'sans-serif']
        },
        extend: {
            spacing: {
                '4.5': '1.125rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        plugin(function ({ addBase, addUtilities, theme }) {
            addBase({
                '*': {
                    boxSizing: 'border-box',
                },
                'body, h1, h2, h3, h4, h5, h6, p, a, h1-b, h2-b, h3-b, h4-b, h5-b, h6-b, p-l, pl-b, p-b, p-s, ps-b, p-xs, pxs-b, img': {
                    display: 'block',
                    margin: 0,
                    fontWeight: 400,
                    color: theme('colors.secondary.DEFAULT'),
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

                // Tables 
                table: {
                    margin: 0,
                },
                'thead, tr': {
                    border: 'none',
                },
                'th, td': {
                    verticalAlign: 'baseline',
                },
                th: {
                    padding: '0 1.5rem 0.75rem 0',
                    textAlign: 'left'
                },
                td: {
                    padding: '1rem 1.5rem 1rem 0',
                },
                'td:last-child, th:last-child': {
                    paddingRight: 0,
                },

                // Lists 
                ul: {
                    display: 'grid',
                    gap: '1rem',
                },
                li: {
                    listStyleType: 'disc',
                    marginLeft: '1.5rem',
                },

                // Scrollbar
                '.scroll, .scroll-flush': {
                    // .scroll: 4px Spacing to the right
                    // .scroll-flush: flush against container wall
                    overflow: 'hidden',
                },
                '.scroll:hover, .scroll-flush:hover': {
                    overflow: 'overlay !important', // Chrome
                    overflowY: 'auto', // Firefox / Safari
                    overflowX: 'auto', // Firefox / Safari
                },
                '.scroll::-webkit-scrollbar': {
                    height: '1rem',
                    width: '1rem',
                },
                '.scroll-flush::-webkit-scrollbar': {
                    height: '0.5rem',
                    width: '0.5rem',
                },
                '.scroll::-webkit-scrollbar-thumb, .scroll-flush::-webkit-scrollbar-thumb': {
                    backgroundColor: theme('colors.neutral.400'),
                },
                '.scroll::-webkit-scrollbar-track-piece, .scroll-flush::-webkit-scrollbar-track-piece': {
                    backgroundColor: theme('colors.neutral.100'),
                },
                '.scroll::-webkit-scrollbar-thumb, .scroll::-webkit-scrollbar-track-piece': {
                    border: '0.25rem solid rgba(0, 0, 0, 0)',
                    backgroundClip: 'padding-box',
                    borderRadius: '1rem',
                },
                '.scroll-flush::-webkit-scrollbar-thumb, .scroll-flush::-webkit-scrollbar-track-piece': {
                    borderRadius: '1rem',
                    margin: '0.25rem',
                }
            })
            addUtilities({
                // Scrollbar Styling
                // .scroll: 4px Spacing to the right */
                // .scroll-flush: flush against container wall */
                '*::-webkit-scrollbar': {
                    height: '1rem',
                    width: '1rem',
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: theme('colors.neutral.500'),
                    border: '0.25rem solid rgba(0, 0, 0, 0)',
                    backgroundClip: 'padding-box',
                    borderRadius: '1rem',
                },
                '*::-webkit-scrollbar-track': {
                    backgroundColor: 'rgba(0,0,0,0)',
                },
            })
        })
    ]
}
