interface IAnswerProps {
  answer: string;
  correct?: boolean;
  clicked: boolean;
  selected: boolean;
  handleClick: (answer: string) => void;
}

const Answer = ({
  answer,
  correct,
  clicked,
  selected,
  handleClick,
}: IAnswerProps) => {
  let backgroundClass = 'bg-gray-600 text-white';

  if (clicked) {
    backgroundClass = selected
      ? correct
        ? 'bg-green-400 text-black'
        : 'bg-red-400 text-black'
      : 'bg-gray-600 text-white';
  }

  return (
    <button
      onClick={() => handleClick(answer)}
      className={`${backgroundClass} p-4 rounded text-lg`}
      disabled={clicked}
    >
      {answer}
    </button>
  );
};

export default Answer;
