/* eslint-disable react/prop-types */
const Question = ({ question }) => {
  console.log(question.category);

  // Converting answers object to an arry in order to map through each answer
  const answersArray = Object.values(question.answers);

  // filtering out answers with value === nulll
  const filteredAnswers = answersArray.filter((val) => val !== null);

  return (
    <div className=" font-gabarito ">
      <span className="text-[#F39C12] text-lg">(#{question.category})</span>{" "}
      <h1 className="text-2xl text-center px-10 sm:text-justify sm:px-0">
        {question.question}
      </h1>
      {filteredAnswers.map((answer) => (
        <button
          key={answer}
          className="block w-[60%] mx-10 py-4 px-6 bg-slate-200 rounded-full my-6 text-sm font-bold text-justify transition duration-200 hover:border-2 hover:border-slate-400 hover:translate-x-7 hover:duration-300"
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Question;
