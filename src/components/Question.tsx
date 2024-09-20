interface IQuestionProps {
  question: string;
}
const Question = ({ question }: IQuestionProps) => {
  return <div className="text-xl">{question}</div>;
};

export default Question;
