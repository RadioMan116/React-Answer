import React, {Component} from 'react';
import './Quiz'
import ActiveQuiz from './../../components/ActiveQuiz/ActiveQuiz'
import Finished from './../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
	state = {
		results: {},
		isFinished: false,
		activeQuestion: 0,
		answerState: null,
		quiz : [
			{
				question: 'Какого цвета небо?',
				rightAnswerId: 2,
				id: 1,
				answers: [
					{text: 'черный', id: 1},
					{text: 'синий', id: 2},
					{text: 'красный', id: 3}
				]
			},
			{
				question: 'В каком году основали Санкт-Петербург?',
				rightAnswerId: 3,
				id: 2,
				answers: [
					{text: '1700', id: 1},
					{text: '1702', id: 2},
					{text: '1703', id: 3}
				]
			}
		]
	}

	AnswerClickHandler = answerId => {

		if(this.state.answerState) {

			const key = Object.keys(this.state.answerState)[0]
			if(this.state.answerState[key] === 'success') {
				return
			}
		}

		const question = this.state.quiz[this.state.activeQuestion]
		const results = this.state.results

		if(question.rightAnswerId === answerId){

			if(!results[answerId]) {
				results[answerId] = 'success'
			}

			this.setState({
				answerState: {[answerId]: 'success'},
				results
			})

			const timeout = window.setTimeout(() => {

				if(this.isQuizFinished()) {

					this.setState({
						isFinished: true
					})

				} else {

					this.setState({
						activeQuestion: this.state.activeQuestion + 1,
						answerState : null
					})

				}

				window.clearInterval(timeout)

			}, 1000)

		} else {
			results[answerId] = 'error'
			this.setState({
				answerState: {[answerId]: 'error'},
				results
			})
		}


	}

	isQuizFinished() {
		return this.state.activeQuestion + 1 === this.state.quiz.length;
	}

	render() {
		return (
			<div className="QuizElem">
				<div className="QuizWrapper">
					<h1>Ответьте на все вопросы</h1>

					{
						this.state.isFinished
						? <Finished
							results={this.state.results}
							quiz={this.state.quiz}
						 />
						: <ActiveQuiz
							answers={this.state.quiz[this.state.activeQuestion].answers}
							question={this.state.quiz[this.state.activeQuestion].question}
							onAnswerClick={this.AnswerClickHandler}
							answerNumber={this.state.activeQuestion + 1}
							quizLength={this.state.quiz.length}
							state={this.state.answerState}
						  />
					}
				</div>
			</div>
		)
	}
}

export default Quiz;
