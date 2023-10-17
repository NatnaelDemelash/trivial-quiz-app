/* eslint-disable react/prop-types */
const ResultPage = ({ score, numQuestions }) => {
  return (
    <div className="result">
      You Scored <span>{score}</span> out of {numQuestions} (
      {Math.ceil((score / numQuestions) * 100)} %)
    </div>
  );
};

export default ResultPage;
