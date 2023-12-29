import React, { useState, useEffect } from 'react';
import { fetchQuizQuestions } from './utils/api_request';
import QuestionCard from './components/QuestionCard';
import Settings from './components/Settings';
import { QuestionsState, Difficulty } from './utils/api_request';
import { GlobalStyle, Wrapper, NextOrStartButton, MenuBurger } from './App.styles';
import { MdMenu, MdClose } from "react-icons/md";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

// const TOTAL_QUESTIONS = parseInt(localStorage.getItem('amount') || '10');
// const difficulty = localStorage.getItem('difficulty') || 'easy';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [clicked, setClicked] = useState(false);

  const [TOTAL_QUESTIONS, setTotalQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    const storedAmount = localStorage.getItem('amount');
    const storedDifficulty = localStorage.getItem('difficulty');

    if (storedAmount) {
      setTotalQuestions(parseInt(storedAmount));
    }

    if (storedDifficulty) {
      setDifficulty(storedDifficulty);
    }
  }, []);

  const loadQuestions = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty[difficulty.toUpperCase() as keyof typeof Difficulty]
    );

    console.log(newQuestions)
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  const handleSettings = () => {
    setClicked(true)
  };

  const handleCloseSettings = () => {
    setClicked(false)
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {!clicked ? 
          <MenuBurger>
            <MdMenu className='menu' onClick={handleSettings}/>
          </MenuBurger> 
          :
          <MenuBurger>
            <MdClose className='menu' onClick={handleCloseSettings}/>
          </MenuBurger>
         }
        {clicked ? ( 
          <Settings /> 
        ): null}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <NextOrStartButton onClick={loadQuestions}>
            Start
          </NextOrStartButton>
        ) : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
            score={score}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <NextOrStartButton onClick={nextQuestion}>
            Next Question
          </NextOrStartButton>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
