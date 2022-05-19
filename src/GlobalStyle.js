import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {

  /* original color */
  --background-color: #1b1b4b;
  --subtitle-color: #323267;
  --accent-color: #9130ce;
  --title-color: #323267;


  /* Sub theme color */

  --sub-main-background:rgb(0, 0, 0);
  --sub-theme-color:#27496d;
  --sub-theme-about:#041524;
  --sub-theme-accent:#00a8cc;
  --sub-accent: #0C7B93;
/* --english: 'Josefin Sans', sans-serif; */


/* language font */
--english: 'Poppins', sans-serif;
--japanese: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;

}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: white;

  
}

body {


  
  a {
    text-decoration: none;
  }
  
}

h1 {
    font-size: 3.5rem;
   
}

h2 {
    font-size: 2rem;
}



`;
