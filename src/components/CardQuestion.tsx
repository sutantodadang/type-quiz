import React from 'react';
import { AnswerObject } from '../api/API';
import { Wrapper, ButtonWrapper } from './CardQuestion.styles';

interface Props {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestion: number;
}

const CardQuestion: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestion
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNum} / {totalQuestion}
      </p>

      <p dangerouslySetInnerHTML={{ __html: question }} />

      <div>
        {answers.map((val) => (
          <ButtonWrapper
            correct={userAnswer?.correctAnswer == val}
            userClicked={userAnswer?.answer == val}
            key={val}
          >
            <button
              value={val}
              disabled={userAnswer ? true : false}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: val }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default CardQuestion;
