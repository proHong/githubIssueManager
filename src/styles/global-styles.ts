import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Gosanja';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/Gosanja.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/Gosanja.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    src: url(/fonts/NotoSansKR-Light.woff2) format('woff2'),
    url(/fonts/NotoSansKR-Light.woff) format('woff'),
    url(/fonts/NotoSansKR-Light.otf) format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/NotoSansKR-Regular.woff2) format('woff2'),
    url(/fonts/NotoSansKR-Regular.woff) format('woff'),
    url(/fonts/NotoSansKR-Regular.otf) format('opentype');
  }
  
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: url(/fonts/NotoSansKR-Bold.woff2) format('woff2'),
    url(/fonts/NotoSansKR-Bold.woff) format('woff'),
    url(/fonts/NotoSansKR-Bold.otf) format('opentype');
  }

  html,body, h1, h2, h3, h4, h5, h6, form, fieldset, img {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;padding:0;border:0;
    /* font-family:"Noto Sans KR", sans-serif;  */
    font-family: 'Noto Sans KR', Helvetica, Arial, sans-serif;
    font-size:0.9em; line-height:1.2;}
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display:block;}
  
  ul,dl,dt,dd {margin:0;padding:0;list-style:none;}
  legend {position:absolute;margin:0;padding:0;;line-height:0;text-indent:-9999em;overflow:hidden;}
  label, input, button, select, img {vertical-align:middle;}
  input, button {margin:0;padding:0;font-family: 'Noto Sans Kr','nanum Gothic','Malgun Gothic', dotum, sans-serif;}
  input[type="submit"]{cursor:pointer}
  button {cursor:pointer}
  
  textarea, select {font-family: 'Noto Sans Kr','nanum Gothic','Malgun Gothic', dotum, sans-serif;}
  select {margin:0}
  p {margin:0;padding:0;word-break:break-all}
  hr {display:none}
  pre {overflow-x:scroll;}
  a {color:#222;text-decoration:none}
  
  
  *, :after, :before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }
  *:focus, *:active {
    outline: 0 !important; }

`;

export default GlobalStyle;
