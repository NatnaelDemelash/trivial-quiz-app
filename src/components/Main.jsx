import { useEffect, useReducer } from "react";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  questionIndex: 0,

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
    default:
      throw new Error("Action Unknown");
  }
}

const Main = () => {
  const [{ status, questionIndex, questions }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const token = "GVS2VYxaPjwqgzka8HP5Ajuuu9nuTLvUYWR23TEs";

  const getQuestions = () => {
    fetch(`https://quizapi.io/api/v1/questions?apiKey=${token}&limit=10`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReady", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen dispatch={dispatch} />}
      {status === "active" && <Question question={questions[questionIndex]} />}
    </div>
  );
};

export default Main;
