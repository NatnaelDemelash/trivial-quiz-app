/* eslint-disable react/prop-types */
const Question = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  // console.log(question);
  // Converting answers object to an arry in order to map through each answer
  const answersArray = Object.values(question.answers);

  // filtering out answers with value === nulll
  const filteredAnswers = answersArray.filter((val) => val !== null);

  const correctAnswers = Object.values(question.correct_answers);
  const indexOfCorrectAnswer = correctAnswers.indexOf("true");

  // console.log(indexOfCorrectAnswer);

  return (
    <div className=" font-gabarito ">
      <span className="text-[#F39C12] text-lg">(#{question.category})</span>{" "}
      <h1 className="text-2xl text-center px-10 sm:text-justify sm:px-0">
        {question.question}
      </h1>
      {filteredAnswers.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === indexOfCorrectAnswer
                ? "correct"
                : "wrong"
              : ""
          } `}
          key={option}
          disabled={hasAnswered}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index,
            })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
