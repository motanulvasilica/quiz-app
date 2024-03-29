import Question from "./Question";

function NextButton({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    ></button>
  );
}
export default NextButton;
