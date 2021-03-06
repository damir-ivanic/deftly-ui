module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blue: {
					50: '#F5FCFE',
					100: '#DEF5FC',
					200: '#BDEAF8',
					300: '#9DE0F5',
					400: '#7CD5F1',
					500: '#5BCBEE',
					600: '#1FB8E8',
					700: '#138DB3',
					800: '#0C5E77',
					900: '#0F2329'
				},
				green: {
					50: '#F5FCFA',
					100: '#DDF4EE',
					200: '#BAE9DD',
					300: '#98DDCD',
					400: '#75D2BC',
					500: '#53C7AB',
					600: '#37AA8E',
					700: '#2A806B',
					800: '#1C5547',
					900: '#0E2B24'
				},
				darkBlue: {
					50: '#F5F7FD',
					100: '#DDE4F7',
					200: '#BAC9EF',
					300: '#98AEE7',
					400: '#7593DF',
					500: '#5378D7',
					600: '#2D57C1',
					700: '#224191',
					800: '#162B61',
					900: '#0B1630'
				},
				purple: {
					50: '#F8F6FD',
					100: '#E6E1F8',
					200: '#CDC4F0',
					300: '#B3A6E9',
					400: '#9A89E1',
					500: '#816BDA',
					600: '#5537CD',
					700: '#3E279C',
					800: '#291A68',
					900: '#150D34'
				},
				dark: {
					50: '#EDF0F6',
					100: '#DDE2EC',
					200: '#C5CCDB',
					300: '#9CA8BF',
					400: '#7988A5',
					500: '#556584',
					600: '#384865',
					700: '#212E46',
					800: '#192439',
					900: '#0F1829'
				}
			},

			fontFamily: {
				inter: ['"Inter"', 'cursive'],
				syne: ['"Syne"', 'sans-serif']
			}
		}
	},
	extend: {
		typography: (theme) => ({
			DEFAULT: {
				css: {
					color: theme('colors.purple.700'),
					h2: {
						color: theme('colors.purple.800')
					},
					h3: {
						color: theme('colors.purple.800')
					},
					strong: {
						color: theme('colors.purple.800')
					},
					a: {
						color: theme('colors.green.500'),
						'&:hover': {
							color: theme('colors.green.600')
						}
					}
				}
			}
		})
	},
	plugins: [require('@tailwindcss/typography')]
};
