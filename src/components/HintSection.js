import React from 'react';

export default function HintSection({ currentQuestion = undefined }) {
	const handleHiddenClicked = (e) => {
		let isHidden = document.getElementById(e.target.name);
		if (isHidden.classList.value === 'hidden') {
			isHidden.classList = '';
		} else {
			isHidden.classList = 'hidden';
		}
	};

	console.log(currentQuestion);
	if (currentQuestion == undefined) {
		return <h3>Take the test again?</h3>;
	} else {
		return (
			<div id='hints'>
				<button name='hint' onClick={handleHiddenClicked}>
					Hint
				</button>
				<p id='hint' className='hidden'>
					{currentQuestion.hint}
				</p>
				<button name='picture' onClick={handleHiddenClicked}>
					Picture
				</button>
				<img id='picture' className='hidden' src={currentQuestion.picture} />
				<button name='answer' onClick={handleHiddenClicked}>
					Show Answer
				</button>
				<p id='answer' className='hidden'>
					{currentQuestion.answer}
				</p>
			</div>
		);
	}
}
