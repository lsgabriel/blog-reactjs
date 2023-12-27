import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body,nav,.cards {
    background: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  h1, h2, h3{
    color: ${({ theme }) => theme.text};
  }

  p{
    color: ${({ theme }) => theme.gray};
  }
  span{
    color: ${({ theme }) => theme.gray};
  }
`;

export const lightTheme = {
    body: '#EEEEEE',
    text: '#111111',
    gray:'#333333',
  };
  
  export const darkTheme = {
    body: "#1B1B1B",
    text: "#FFFFFF",
    gray:'#E0E0E0',
  };