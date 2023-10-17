/* eslint-disable react/prop-types */
const ResultPage = ({ score, numQuestions, dispatch, highScore }) => {
  const percentage = (score / numQuestions) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{score}</strong> out of{" "}
        {numQuestions} ({Math.ceil(percentage)}%)
      </p>

      <p className="text-center text-3xl font-gabarito">
        HighScore : {highScore}
      </p>

      <button
        className="btn btn-restart"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
};

export default ResultPage;
