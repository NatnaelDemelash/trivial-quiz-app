/* eslint-disable no-case-declarations */
import { useEffect, useReducer } from "react";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import ResultPage from "./ResultPage";

const initialState = {
  questions: [],
  questionIndex: 0,
  answer: null,
  score: 0,

  // 'loading', 'ready', 'active', 'error', 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReady":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "startQuestion":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = state.questions.at(state.questionIndex);
      const correctAnswers = Object.values(question.correct_answers);
      const indexOfCorrectAnswer = correctAnswers.indexOf("true");

      return {
        ...state,
        answer: action.payload,
        score:
          action.payload === indexOfCorrectAnswer
            ? state.score + 1
            : state.score,
      };

    case "nextQuestion":
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        answer: null,
      };

    case "finish":
      return {
        ...state,
        status: "finished",
      };

    default:
      throw new Error("Action Unknown");
  }
}

const Main = () => {
  const [{ status, questionIndex, questions, answer, score }, dispatch] =
    useReducer(reducer, initialState);

  const numQuestions = questions.length;

  const token = "GVS2VYxaPjwqgzka8HP5Ajuuu9nuTLvUYWR23TEs";

  const getQuestions = () => {
    fetch(
      `https://quizapi.io/api/v1/questions?apiKey=${token}&difficulty=Medium&limit=10`
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReady", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed", payload: err }));
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen dispatch={dispatch} />}
      {status === "active" && (
        <>
          <Progress
            index={questionIndex}
            numQuestion={numQuestions}
            score={score}
            answer={answer}
          />
          <Question
            question={questions[questionIndex]}
            dispatch={dispatch}
            answer={answer}
          />

          <NextButton
            dispatch={dispatch}
            answer={answer}
            questionIndex={questionIndex}
            numQuestions={numQuestions}
          />
        </>
      )}
      {status === "finished" && (
        <ResultPage numQuestions={numQuestions} score={score} />
      )}
    </div>
  );
};

export default Main;
