import './App.css';
import { useState } from 'react';
import CurrentQuestion from './components/CurrentQuestion';
import HintSection from './components/HintSection';

function App() {
	const aboutTest = {
		subject: 'Encanto',
	};

	const [questions, setQuestions] = useState([
		{
			id: 1,
			question: 'Who is Mirabel',
			hint: 'Different from everyone else',
			picture: `/images/mirabel.jpg`,
			answer: 'She has no gift, but keeps the family together',
			isAnswered: false,
			isCorrect: false,
		},
		{
			id: 2,
			question: 'Who is Abuela?',
			hint: 'She might burn you',
			picture: `/images/abuela.jpg`,
			answer: 'Keeper of the Magical Candle',
			isAnswered: false,
			isCorrect: false,
		},
		{
			id: 3,
			question: 'Who is Dolores?',
			hint: 'Hard to keep secrets from',
			picture: `/images/dolores.jpg`,
			answer: 'Super hearing',
			isAnswered: false,
			isCorrect: false,
		},
		{
			id: 4,
			question: 'Who is Bruno?',
			hint: `We don't talk about Bruno-no-no`,
			picture: `/images/bruno.jpg`,
			answer: 'Can see the future',
			isAnswered: false,
			isCorrect: false,
		},
	]);

	const [unansweredQuestions, setUnansweredQuestions] = useState(
		questions.filter((q) => q.isAnswered === false)
	);

	const randomNumber = Math.floor(Math.random() * unansweredQuestions.length);
	const totalQuestions = questions.length;

	const questionsAnswered = questions.filter(
		(q) => q.isAnswered === true
	).length;

	const correctAnswers = questions.filter((q) => q.isCorrect === true).length;

	const currentQuestion = unansweredQuestions[randomNumber];

	let questionID;

	if (unansweredQuestions.length > 0) {
		questionID = currentQuestion.id;
	}

	const changeIsAnswered = (answer) => {
		let answeredQuestion = questions;
		let positionInQuestionArray = questions.findIndex(
			(q) => q.id === questionID
		);
		answeredQuestion[positionInQuestionArray].isAnswered = true;
		answeredQuestion[positionInQuestionArray].isCorrect = answer;
		setQuestions(answeredQuestion);
		setUnansweredQuestions(questions.filter((q) => q.isAnswered === false));
	};

	const handleRightClicked = () => {
		changeIsAnswered(true);
	};

	const handleWrongClicked = () => {
		changeIsAnswered(false);
	};

	const handleHiddenClicked = (e) => {
		let isHidden = document.getElementById(e.target.name);
		if (isHidden.classList.value === 'hidden') {
			isHidden.classList = '';
		} else {
			isHidden.classList = 'hidden';
		}
	};

	return (
		<div id='main'>
			<h4>Right Wrong Tester</h4>
			<h2>Subject: {aboutTest.subject}</h2>
			<p>
				You have answered {questionsAnswered}/{totalQuestions}
			</p>
			<CurrentQuestion question={currentQuestion} correct={correctAnswers} />
			<HintSection currentQuestion={currentQuestion} />

			<div id='correctWrong'>
				<button id='correct' onClick={handleRightClicked}>
					✔
				</button>
				<button id='wrong' onClick={handleWrongClicked}>
					✖
				</button>
			</div>
		</div>
	);
}

export default App;
