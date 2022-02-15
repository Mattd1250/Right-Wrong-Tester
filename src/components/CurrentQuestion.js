import React from 'react';

export default function CurrentQuestion({ question, correct }) {
	if (question) {
		return <h1>{question.question}</h1>;
	} else {
		return (
			<>
				<h3>There are no more questions.</h3>
				<h2>{`You got ${correct} correct`}</h2>
			</>
		);
	}
}
