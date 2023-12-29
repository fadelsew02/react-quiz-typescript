import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 200px;
  background: #fff;
  padding: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  opacity: .8;
  position: relative;
  top: -50px;
  left: 20px;
  z-index: 2;
  border-radius: 5px;


  @media (max-width: 768px) {

  }
`;


export const ButtonWrapper = styled.div`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    font-size: 1rem;
    text-align: left;
    width: 100%;
    height: 40px;
    margin: 5px 0px;
    color: #000;
  }
`;



export const ComponentWrapper = styled.div`


`;