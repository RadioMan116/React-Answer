import React from 'react'
import './FinishedQuiz.css'

const Finished = props => {

	return (
		<div className='FinishedQuiz'>
			<ul>
				{props.quiz.map((quizItem, index) => {
					const cls = [
						'fa',
						props.results[quizItem.id] === 'error' ? 'fa-times error' : 'fa-check success'
					]

					return (
						<li
							key={index}
						>
							<strong>{index + 1}</strong>.&nbsp;
							{quizItem.question}
							<i className={cls.join(' ')}/>
						</li>
					)
				})}
			</ul>

			<p>4 из 10</p>

			<div>
				<button>Повторить</button>
			</div>
		</div>
	)
}

export default Finished;
