// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

// const fonts = {
// 	fonts: {
// 		body: `Vecna, sans-serif`,
// 		heading: 'Vecna, sans-serif'
// 	},
// };

// const breakpoints = {
// 	sm: '38em'
// }

// const body = {
// 	styles: {
// 	  global: {
// 		'html, body': {
// 			minHeight:'100vh',
// 			padding:'4',
// 			letterSpacing: '2px',
// 		},
// 		'button': {
// 		  letterSpacing:'3px',
// 		  boxShadow:'2px 2px 5px 0px #cadad8'
// 		}
// 	  },
// 	},
//   }


// // 3. extend the theme
const theme = extendTheme({ config });

export default theme;