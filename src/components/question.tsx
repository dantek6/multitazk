import { FC } from 'react';

interface QuestionProps {
  question: string;
  answers: string[];
  onSelectAnswer: (answer: string) => void;
};

const Question: FC<QuestionProps> = ({ question, answers, onSelectAnswer }) => {
  return (
    <div className="quiz">
      <h2 className="question">{question}</h2>
      <ul className="answers">
        {answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => onSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;