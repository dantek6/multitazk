import { FC, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import Question from './question';
import Answer from './answer';

// Declaración de los tipos de las props del componente Quiz
interface QuizProps {
  questions: { question: string; answers: string[] }[];
}

// Definición del componente Quiz como función que recibe las props de tipo QuizProps
const Quiz: FC<QuizProps> = ({ questions }) => {
  // Estado inicial del quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState<number | "calculating...">("calculating...");

  // Creamos un observable a partir del estado de las respuestas seleccionadas
  const selectedAnswers$ = new BehaviorSubject(selectedAnswers);

  // Función para manejar la selección de una respuesta
  const handleSelectAnswer = (answer: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(newSelectedAnswers);
    // Enviamos las respuestas seleccionadas al observable
    selectedAnswers$.next(newSelectedAnswers);
  };

  // Función para mostrar las respuestas correctas
  const handleShowAnswers = () => {
    setShowAnswers(true);
  };

  // Creamos un observable a partir de las respuestas seleccionadas para calcular la puntuación
  const score$ = selectedAnswers$.pipe(
    map((selectedAnswers) =>
      questions.reduce(
        (totalScore, currentQuestion, index) =>
          totalScore +
          (currentQuestion.answers.indexOf(selectedAnswers[index]) === -1 ? 0 : 1),
        0
      )
    ),
    // Usamos tap para actualizar el estado de la puntuación
    tap((score) => setScore(score))
  );

  return (
    <div className='quiz'>
      {/* Si se muestran las respuestas, mostramos las respuestas con la puntuación */}
      {showAnswers ? (
        questions.map((question, index) => (
          <Answer
            key={index}
            answer={question.answers[selectedAnswers[index] as any]}
            score={question.answers.indexOf(selectedAnswers[index]) === -1 ? 0 : 1}
          />
        ))
      ) : (
        // Si no se muestran las respuestas, mostramos la pregunta actual y las opciones
        <>
          <Question
            question={questions[currentQuestion].question}
            answers={questions[currentQuestion].answers}
            onSelectAnswer={handleSelectAnswer}
          />
          {/* Si no es la última pregunta, mostramos el botón para la siguiente pregunta */}
          {currentQuestion < questions.length - 1 && (
            <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
              Next Question
            </button>
          )}
          {/* Si es la última pregunta, mostramos el botón para mostrar las respuestas */}
          {currentQuestion === questions.length - 1 && (
            <button onClick={handleShowAnswers}>Show Answers</button>
          )}
        </>
      )}
      {/* Si se muestran las respuestas, mostramos la puntuación */}
      {showAnswers && (
        <p>
          Your Score:{' '}
          {score !== "calculating..." ? score : 'calculating...'}
        </p>
      )}
    </div>
  );
};

export default Quiz;
