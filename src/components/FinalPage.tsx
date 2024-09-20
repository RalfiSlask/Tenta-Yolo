import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionsContext } from '../context/Context';
import { shuffleQuestions } from '../helpers/helpers';
import LottieAnimationOne from './LottieAnimationOne';
import LottieAnimationTwo from './LottieAnimationTwo';
import LottieAnimationThree from './LottieAnimationThree';

const FinalPage = () => {
  const navigate = useNavigate();
  const context = useContext(QuestionsContext);

  if (!context) {
    throw new Error('context is wrong, tjotablang');
  }

  const { questions, setQuestions } = context;

  const correctCount = questions.reduce(
    (count, q) => count + (q.correct_answer === q.selected_answer ? 1 : 0),
    0
  );
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

  return (
    <main className="flex flex-col items-center gap-20">
      <div className="flex gap-4">
        <LottieAnimationOne />
        <LottieAnimationTwo />
        <LottieAnimationThree />
      </div>
      <section className="flex flex-col gap-20 items-center">
        <h2 className="text-2xl">
          Så här många rätt fick du:
          <span className="text-green-400"> {correctCount}</span>
          <span>{` / ${questions.length}`}</span>
        </h2>
        <button onClick={handleGoBack} className="max-w-[200px] text-xl">
          Gå tillbaka
        </button>
      </section>
    </main>
  );
};

export default FinalPage;
