import { FC } from 'react';

type AnswerProps = {
  answer: string;
  score: number;
};

const Answer: FC<AnswerProps> = ({ answer, score }) => {
  return (
    <div className="quiz">
      <h2 className="answer">{answer}</h2>
      <p className={`score ${score === 1 ? 'correct' : 'incorrect'}`}>
        {score === 1 ? 'Correct' : 'Incorrect'}
      </p>
    </div>
  );
};

export default Answer;
