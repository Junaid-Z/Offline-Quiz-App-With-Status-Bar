import { useState } from "react";
import Question from "./components/Qustion";
import MainCard from "./components/MainCard";
import ResultCard from "./components/ResultCard";
import { questions } from "./Resources/data";
import "./Style/QuizApp.css"
import StatusBar from "./components/StatusBar";
function QuizApp() {
	let [count, setCount] = useState(-1);
	let [answers, setAnswers] = useState([]);
	function ChangeCount(v) {
		if (v === 1) {
			if (count < questions.length && count !== -1) {
				if (answers[count] !== undefined) {
					setCount(count + 1);
				}
				else {
					alert("Please Choose An Option")
				}
			}
			else {
				setCount(count + 1);
			};
		}
		else if (v === -1) {
			if (count > -1) {
				setCount(count - 1);
			}
		}
	}
	return (
		<div className="App">
			<header className="App-header">
				<div className='card questionCard'>
					<StatusBar questions={questions} count={count} />
					{
						(
							count === -1
							&&
							<MainCard quizName={"Some Quiz"} questions={questions} />
						)
						||
						(
							count < questions.length
							&&
							<Question setAnswers={setAnswers} answers={answers} count={count} questions={questions} />
						)
						||
						<ResultCard answers={answers} questions={questions} />
					}
				</div>
				<div className="myButtons">
					<button onClick={() => { ChangeCount(-1) }}>Previous Question</button>
					<button onClick={() => { ChangeCount(1) }}>Next Question</button>
				</div>
			</header>
		</div>
	);
}
export default QuizApp;