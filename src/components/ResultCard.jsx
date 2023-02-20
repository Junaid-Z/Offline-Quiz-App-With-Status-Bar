function ResultCard(props) {
	let { answers, questions } = props;
	function CalculateScore(answers) {
		let score = 0;
		let wrongAnswers = [];
		for (var questionNumber = 0; questionNumber < answers.length; questionNumber += 1) {
			let chosenAnswer = answers[questionNumber];
			if (questions[questionNumber].options[chosenAnswer] === questions[questionNumber].answer) {
				score += 1;
			}
			else {
				wrongAnswers.push(questionNumber + 1);
			}
		}
		console.log(answers)
		console.log(score);
		return {
			score: score,
			wrongAnswers: wrongAnswers,
		};
	}
	return (
		<>
			<div>
				Your Score Is {CalculateScore(answers).score}/{questions.length}
			</div>
			Your Achieved {CalculateScore(answers).score / questions.length * 100}% marks
			{
				CalculateScore(answers).score / questions.length * 100 >= 50 ?
					<div>Congratulations you passed</div>
					:
					<div>Unbelievable you failed</div>
			}
			{(CalculateScore(answers).score === 0
				&&
				<div>
					Did you even prepare for the quiz ? 💀💀💀
				</div>)
				||
				(CalculateScore(answers).score !== 5
					&&
					<div>
						You answered question number {CalculateScore(answers).wrongAnswers.map((a, i, array) => {
							if (i !== array.length - 1) {
								return `${a},`
							}
							else {
								return a
							}
						})} incorrectly
					</div>)
				||
				<div>
					Congratulations you answered all the question correctly. You deserve a pat on the back 🎉🎉🎉
				</div>}
		</>
	)
}
export default ResultCard;