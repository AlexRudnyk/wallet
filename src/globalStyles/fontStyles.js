import { createGlobalStyle } from 'styled-components';

import PoppinsWoff from 'fonts/poppins/poppins-v20-latin-regular.woff';

import PoppinsBoldWoff from 'fonts/poppins/poppins-v20-latin-700.woff';

import CirceRegularWoff from 'fonts/circe/Circe-Regular.woff';

import CirceBoldWoff from 'fonts/circe/Circe-Bold.woff';

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsWoff}) format('woff');
}

@font-face {
  font-family: 'Poppins Bold';
  src: url(${PoppinsBoldWoff}) format('woff');
}

@font-face {
  font-family: 'Circe';
  src: url(${CirceRegularWoff}) format('woff');
}

@font-face {
  font-family: 'Circe Bold';
  src: url(${CirceBoldWoff}) format('woff');
}
`;

export default FontStyles;
