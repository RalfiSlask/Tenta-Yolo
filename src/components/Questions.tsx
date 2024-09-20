import { useContext, useState } from 'react';
import Question from './Question';
import Answer from './Answer';
import { useNavigate } from 'react-router-dom';
import { QuestionsContext } from '../context/Context';
import { shuffleQuestions } from '../helpers/helpers';

const Questions = () => {
  const context = useContext(QuestionsContext);

  if (!context) {
    throw new Error('context is wrong, tjotablang');
  }

  const { questions, setQuestions } = context;
  const [questionIndex, setQuestionIndex] = useState(0);

  const navigate = useNavigate();

  const nextQuestion = () => {
    if (currentQuestion.clicked) {
      setQuestionIndex((prev) =>
        prev < questions.length - 1 ? prev + 1 : prev
      );
    }
  };

  const handleGoBack = () => {
    const resetQuestions = shuffleQuestions(
      questions.map((q) => ({
        ...q,
        selected_answer: '',
        clicked: false,
      }))
    );

    setQuestions(resetQuestions);
    navigate('/');
  };

  const clickOnAnswer = (answer: string) => {
    const updatedQuestions = questions.map((question, index) => {
      if (index === questionIndex && !question.clicked) {
        return {
          ...question,
          clicked: true,
          selected_answer: answer,
        };
      }
      return question;
    });

    setQuestions(updatedQuestions);
    if (questionIndex + 1 === questions.length) {
      setTimeout(() => {
        navigate('/vue/correct');
      }, 1000);
    }
  };

  const currentQuestion = questions[questionIndex];

  const isCorrect =
    currentQuestion.selected_answer === currentQuestion.correct_answer;

  return (
    <main className="flex flex-col items-center gap-20">
      <div className="flex gap-4 flex-col items-center">
        <button onClick={handleGoBack} className="md:text-lg">
          Hem
        </button>
        <h2 className="text-2xl font-bold">{`Fråga ${questionIndex + 1}`}</h2>
      </div>

      <section className="flex flex-col gap-8 items-center">
        <Question question={currentQuestion.question} />
        <div className="flex gap-4 flex-wrap justify-center max-w-[325px] sm:max-w-[700px]">
          {currentQuestion.answers.map((answer, id) => (
            <Answer
              key={id}
              answer={answer}
              clicked={currentQuestion.clicked}
              correct={currentQuestion.correct_answer === answer}
              selected={currentQuestion.selected_answer === answer}
              handleClick={clickOnAnswer}
            />
          ))}
        </div>
      </section>
      <div className="flex flex-col gap-4 items-center h-[200px]">
        {questionIndex < questions.length - 1 && (
          <button
            disabled={!currentQuestion.clicked}
            onClick={nextQuestion}
            className={`${
              currentQuestion.clicked
                ? 'bg-pink-400 text-black hover:bg-pink-600'
                : 'bg-gray-400 hover:bg-gray-400'
            } text-lg`}
          >
            Nästa
          </button>
        )}
        {currentQuestion.clicked && (
          <div className="text-xl">
            {isCorrect ? (
              <span className="text-green-600">Du svarade rätt!</span>
            ) : (
              <span className="text-red-600 flex flex-col text-center gap-4">
                Du svarade fel. Detta är rätt svar:
                <strong className=" text-green-600 max-w-[325px] sm:max-w-[500px]">
                  {currentQuestion.correct_answer}
                </strong>
              </span>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Questions;
