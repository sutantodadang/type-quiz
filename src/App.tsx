import React, { useState } from 'react';
import {
  AnswerObject,
  Difficulty,
  getQuizQuestion,
  QuestionState
} from './api/API';
import CardQuestion from './components/CardQuestion';
import { StyleGlobal, Wrapper } from './App.styles';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setuserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setgameOver] = useState<boolean>(true);

  const startQuiz = async () => {
    setLoading(true);
    setgameOver(false);

    const newQuestion = await getQuizQuestion(10, Difficulty.Easy);

    setQuestions(newQuestion);

    setScore(0);
    setuserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

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
        correctAnswer: questions[number].correct_answer
      };

      setuserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const next = number + 1;

    if (next === 10) {
      setgameOver(true);
    }

    setNumber(next);
  };

  return (
    <>
      <StyleGlobal />
      <Wrapper>
        <h1>Type Quiz</h1>
        {gameOver || userAnswers.length === 10 ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
        ) : null}
        {!gameOver && <p className="score">Score : {score}</p>}
        {loading && <p>waiting for awesome question</p>}
        {!loading && !gameOver && (
          <CardQuestion
            questionNum={number + 1}
            totalQuestion={10}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== 9 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
