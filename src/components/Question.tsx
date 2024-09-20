interface IQuestionProps {
  question: string;
}
const Question = ({ question }: IQuestionProps) => {
  return <div className="text-xl text-center">{question}</div>;
};

export default Question;
