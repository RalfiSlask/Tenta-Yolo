export interface IQuestions {
  questions: IQuestion[];
}

export interface IQuestion {
  id: number;
  question: string;
  answers: string[];
  correct_answer: string;
  clicked: boolean;
  selected_answer?: string;
}
