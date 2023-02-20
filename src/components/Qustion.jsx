import Options from "./Options";

function Question(props) {
	let { count, setAnswers, answers, questions } = props;
	return (
		<>
			<div style={{ marginBottom: "10px" }}>We are currently on question number {count + 1} out of {questions.length} questions</div>
			<div>Q- {questions[count].question}</div>
			<div className="answerList">
				<Options setAnswers={setAnswers} answers={answers} count={count} questions={questions} />
			</div>
		</>
	)
}
export default Question;