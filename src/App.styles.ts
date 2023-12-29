import styled, { createGlobalStyle } from 'styled-components';
import BGImage from '../src/assets/images/bg-image.png';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Paprika', sans-serif;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    body {
      font-size: 10px;
    }
  }
`;

export const NextOrStartButton = styled.button`
  margin: 5px 0;
  padding: 20px;
  background: #1f144d;
  color: #fff;
  border-radius: 40px;
  font-size: 1.1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 20px 0;
    padding: 15px;
    font-size: 0.8rem;
  }
`;

export const MenuBurger = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100px;
  align-items: center;
  font-size: 40px;
  color: #fff;

  .menu{
    cursor: pointer;
  }
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
