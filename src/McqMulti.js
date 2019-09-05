import React from 'react';
import AnswerMcqMulti from './AnswerMcqMulti';
import PropTypes from 'prop-types';
import Question from './Question';

const normal = "bg-normal border-bottom border-regular";
const selected = "bg-selected border-bottom border-regular";

export default class McqMulti extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionId: this.props.question.questionId,
            className: 'ua.edu.ratos.service.domain.response.ResponseMCQ',
            answerIds: []
        }
        this.changeResponse = this.changeResponse.bind(this);
    }

    componentWillMount() {
        //console.log("Component will mount = "+this.props.answered.toString());
        this.setState({ answerIds: this.props.answered });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.answerIds !== prevState.answerIds) {
            this.props.putResponse(this.state.questionId, this.state);
        }
    }

    changeResponse(id) {
        if (this.state.answerIds.includes(id)) {
            this.removeResponse(id);
        } else {
            this.addResponse(id);
        }
    }

    addResponse(id) {
        var newArray = this.state.answerIds.slice();
        newArray.push(id);
        this.setState({ answerIds: newArray });
    }

    removeResponse(id) {
        var newArray = this.state.answerIds.slice();
        var pos = newArray.indexOf(id);
        newArray.splice(pos, 1);
        this.setState({ answerIds: newArray });
    }

    clearResponse() {
        this.setState({ answerIds: [] });
    }

    render() {
        return (
            <div className="border-0">
                <Question
                    question={this.props.question}
                    theme={this.props.theme}
                    mode={this.props.mode}
                    clearResponse={() => this.clearResponse()}
                    reTrySkipAPICall={this.props.reTrySkipAPICall}
                />
                <div className="border-top border-right border-left border-regular">
                    {
                        this.props.answers.map(a => {
                            return (
                                <div key={a.answerId}
                                    className={(this.state.answerIds.includes(a.answerId)) ? selected : normal}
                                    onClick={() => this.changeResponse(a.answerId)}>
                                    <AnswerMcqMulti
                                        questionId={this.state.questionId}
                                        answerId={a.answerId}
                                        answer={a.answer}
                                        resource={a.resourceDomain}
                                        changeResponse={this.changeResponse}
                                        isChecked={this.state.answerIds.includes(a.answerId)} />
                                </div>);
                        })
                    }
                </div>
            </div>
        );
    }
};

const propTypes = {
    question: PropTypes.object.isRequired,
    answers: PropTypes.array.isRequired,
    answered: PropTypes.array,
    putResponse: PropTypes.func.isRequired,
    reTrySkipAPICall: PropTypes.func.isRequired
};

McqMulti.propTypes = propTypes;
