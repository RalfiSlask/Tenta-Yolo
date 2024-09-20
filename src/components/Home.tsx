import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionsContext } from '../context/Context';

const Home = () => {
  const context = useContext(QuestionsContext);

  if (!context) {
    throw new Error('context not found tjotata');
  }

  const { handleClickOnReact, handleClickOnVue } = context;

  return (
    <main className="flex flex-col items-center gap-20">
      <h1>Inför Tenta</h1>
      <p className="text-xl">Vilket ramverk vill du träna på?</p>
      <div className="flex gap-4 items-center">
        <Link to="/questions" onClick={handleClickOnVue}>
          <button className="bg-green-300 text-black text-xl hover:bg-green-500">
            Vue
          </button>
        </Link>
        <Link to="/questions" onClick={handleClickOnReact}>
          <button className="bg-blue-300 text-black text-xl hover:bg-blue-500">
            React
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
