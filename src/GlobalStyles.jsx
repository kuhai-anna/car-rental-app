import { createGlobalStyle } from 'styled-components';

import InterMedium from './fonts/Inter-Medium.ttf';
import ManropeMedium from './fonts/Manrope-Medium.ttf';
import ManropeRegular from './fonts/Manrope-Regular.ttf';
import ManropeSemiBold from './fonts/Manrope-SemiBold.ttf';
import MontserratRegular from './fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from './fonts/Montserrat-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Inter Medium';
  src: url(${InterMedium}) format('truetype');
  font-style: normal;
  font-weight: 500;
  font-display: fallback;
}

@font-face {
  font-family: 'Manrope Regular';
  src: url(${ManropeRegular}) format('truetype');
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
}

@font-face {
  font-family: 'Manrope Medium';
  src: url(${ManropeMedium}) format('truetype');
  font-style: normal;
  font-weight: 500;
  font-display: fallback;
}

@font-face {
  font-family: 'Manrope SemiBold';
  src: url(${ManropeSemiBold}) format('truetype');
  font-style: normal;
  font-weight: 600;
  font-display: fallback;
}

@font-face {
  font-family: 'Montserrat Regular';
  src: url(${MontserratRegular}) format('truetype');
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
}

@font-face {
  font-family: 'Montserrat SemiBold';
  src: url(${MontserratSemiBold}) format('truetype');
  font-style: normal;
  font-weight: 600;
  font-display: fallback;
}

body {
  margin: 0;
  font-family: 'Monrope Regular',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* reset */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

address {
  font-style: normal;
}

button {
  display: block;
  font-family: inherit;
  cursor: pointer;
}

ul,
ol {
  margin: 0;
  padding: 0;

  list-style: none;
}
`;
