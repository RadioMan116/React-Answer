import React from 'react';
import AnswerList from './AnswerList/AnswerList'

const ActiveQuiz = props => (
	<div className="ActiveQuiz">
		<p className="Question">
			<span>
				<strong>{props.answerNumber}.</strong>&nbsp;
				{props.question}
			</span>
			<small>{props.answerNumber} из {props.quizLength}</small>
		</p>
		<AnswerList
			answers={props.answers}
			onAnswerClick={props.onAnswerClick}
			state={props.state}
		/>
	</div>
)

export default ActiveQuiz;
