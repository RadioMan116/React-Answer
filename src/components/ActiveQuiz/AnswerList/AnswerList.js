import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswerList = props => (
	<ul className="AnswerList">

		{props.answers.map( (answer, index) => {
			return (
				<AnswerItem
					answer={answer}
					key={index}
					onAnswerClick={props.onAnswerClick}
					state={props.state ? props.state[answer.id] : null}
				/>
			)
		})}

	</ul>
)

export default AnswerList;
