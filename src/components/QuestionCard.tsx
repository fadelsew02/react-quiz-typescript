import React from 'react';
import DOMPurify from "dompurify";
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper, WrapperAnswers, ImageComponent, ScoreDiv, Score } from './QuestionCard.styles';
import  checked  from '../assets/images/checked.svg';

type Properties = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
  score: number;
};

const QuestionCard: React.FC<Properties> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
  score,
}) => (
  <Wrapper>
    <p>
      Question: {questionNr} / {totalQuestions}
    </p>
    <hr />
    <hr />
    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question) }} />
    <ScoreDiv>
      <Score>{score}</Score>
    </ScoreDiv>
    <WrapperAnswers>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(answer) }} />
          </button>
          <ImageComponent src={checked} alt=""  />
        </ButtonWrapper>
      ))}
    </WrapperAnswers>
  </Wrapper>
);

export default QuestionCard;
