import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #1f144d;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  opacity: .8;

  p {
    font-size: 1.5rem;
    color: #fff;
    text-align: left;
    font-weight: bolder;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
      color: #fff;
      text-align: left;
      font-weight: bolder;
    }
  }
`;

export const WrapperAnswers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin: 10px 0;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }
  position: relative;
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1.1rem;
    text-align: left;
    padding-inline-start: 15px;
    width: 100%;
    height: 70px;
    margin: 5px 0px;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, transparent, transparent)'};
    border: 3px solid #56ccff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 70px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    button{
      text-align: center;
      font-weight: bold;
      font-size: 12px;
    }
  }
`;

export const ImageComponent = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  left: 75%;
  top: 7px;

  @media (max-width: 768px) {
    display: none;
  }
  
`;

export const ScoreDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Score = styled.div`
  width: 80px;
  height: 80px;
  background: #000;
  border-radius: 50%;
  border: 5px solid #fff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    border: 3px solid #fff;
    font-size: 1.1rem;
  }
`;
