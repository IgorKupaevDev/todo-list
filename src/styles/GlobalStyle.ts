import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* modern-css-reset (короче версии Meyer's) */
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  html,body{height:100%;}
  body{
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    line-height:1.5;
  }
  img,svg{display:block;max-width:100%;}
  button{cursor:pointer;border:none;background:none;font:inherit;}
  ul,ol{list-style:none;}
  a{text-decoration:none;color:inherit;}
`
