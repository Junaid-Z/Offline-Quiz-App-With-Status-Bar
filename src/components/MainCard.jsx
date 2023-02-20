function MainCard(props) {
	let { quizName, questions } = props;
	return (
		<>
			<div>You are currently attempting the quiz
				<div className="quizTitle">{quizName}</div>
			</div>
			<div>
				This quiz has {questions.length} questions, each valued for 1 mark
				<div>For a total of {questions.length} marks</div>
			</div>
		</>
	)
}
export default MainCard;