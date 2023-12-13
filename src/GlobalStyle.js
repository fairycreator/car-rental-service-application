import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root{
--primary-color-white:#FFFFFF; 
--primary-color-black-one:#050505;
--primary-color-violet:#B6C3FF;
--primary-color-black-two:#0F0F0F;
--primary-color-lite-green:#45FFBC;
--primary-color-grey:#B6B6B6;
--primary-color-green-lite:#E3FFA8;

--secondary-color-grey-one:#292928;
--secondary-color-pink:#FFC4F7;
--secondary-color-yellow:#FFF3B7;


--main-font-size: 14px;
--main-line-height:1.4;
--main-letter-spacing:0.02em; 
--transition-dur-and-func: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: var(--primary-color-black-one);
  color: var(--primary-color-white); 
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}

ul,
ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

a
 {
  color: currentColor;
  text-decoration: none;
}

button {
    cursor: pointer;
}
`;

