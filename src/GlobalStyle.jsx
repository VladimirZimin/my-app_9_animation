import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
  background-color: #111d2c;
  color: #ffffff;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  font-family: inherit;
}

label {
  cursor: pointer;
}
`;
