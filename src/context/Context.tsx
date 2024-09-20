import React, { createContext, useState, ReactNode, useEffect } from 'react';
import vue from '../data/vue.json';
import react from '../data/react.json';
import { shuffleQuestions } from '../helpers/helpers';
import { IQuestion } from '../models/IQuestion';

interface IContextValues {
  questions: IQuestion[];
  setQuestions: React.Dispatch<React.SetStateAction<IQuestion[]>>;
  handleClickOnReact: () => void;
  handleClickOnVue: () => void;
}

export const QuestionsContext = createContext<IContextValues | undefined>(
  undefined
);

export const QuestionsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isReact, setIsReact] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>(
    shuffleQuestions(vue.questions)
  );

  useEffect(() => {
    const newQuestions = isReact ? react.questions : vue.questions;
    setQuestions(shuffleQuestions(newQuestions));
  }, [isReact]);

  const handleClickOnReact = () => {
    setIsReact(true);
  };

  const handleClickOnVue = () => {
    setIsReact(false);
  };

  const questionsValue = {
    questions: questions,
    setQuestions: setQuestions,
    handleClickOnReact: handleClickOnReact,
    handleClickOnVue: handleClickOnVue,
  };

  return (
    <QuestionsContext.Provider value={questionsValue}>
      {children}
    </QuestionsContext.Provider>
  );
};
