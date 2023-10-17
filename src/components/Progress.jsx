/* eslint-disable react/prop-types */
const Progress = ({ index, numQuestion, score }) => {
  return (
    <header className=" font-mono ">
      <progress className="progress" max={numQuestion} value={index} />
      <div className="flex justify-between items-center my-3">
        <p>
          Question <strong>{index + 1}</strong> / {numQuestion}
        </p>
        <p className="mr-[15rem]">
          TotalPoints: <strong>{score}</strong>{" "}
        </p>
      </div>
    </header>
  );
};

export default Progress;
