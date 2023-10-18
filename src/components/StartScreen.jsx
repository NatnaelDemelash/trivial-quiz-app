/* eslint-disable react/prop-types */
const StartScreen = ({ dispatch }) => {
  const questionCategory = [
    "SQL",
    "Code",
    "Linux",
    "DevOps",
    "Bash",
    "Docker",
    "CMS",
  ];

  return (
    <div className="text-center my-16">
      <h1 className="text-5xl mb-6 font-gabarito">Welcome to Quiz Trivia! </h1>
      <p className=" text-2xl mb-10 font-gabarito">
        Questions to test your Computer Science Knowledge{" "}
      </p>
      {questionCategory.map((cat) => (
        <span key={cat} className="text-[#F39C12] text-base font-bold">
          #{cat}{" "}
        </span>
      ))}{" "}
      <br />
      <button
        className="get-started my-16 transition ease-in-out delay-300 bg-transparent border-2 rounded-md border-black py-4 px-6 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300"
        onClick={() => dispatch({ type: "startQuestion" })}
      >
        Get Started
      </button>
    </div>
  );
};

export default StartScreen;
