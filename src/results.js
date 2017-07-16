import React, {Component} from 'react';
import {connect} from 'react-redux';

class Results extends Component {

    getTotal() {
        var t = this.props.votes;
        return Object.keys(t).reduce((a, b) => a + t[b], 0)
    }

    votesAngularInPercent() {
        var t = this.getTotal();
        return t === 0 ? 0 : this.props.votes.angular / t * 100;
    }

    votesReactInPercent() {
        var t = this.getTotal();
        return t === 0 ? 0 : this.props.votes.react / t * 100;
    }

    votesVuejsInPercent() {
        var t = this.getTotal();
        return t === 0 ? 0 : this.props.votes.vuejs / t * 100;
    }

    render() {
        const {votes} = this.props;
        return (
            <div>
                <span className="label label-danger">Angular: {this.votesAngularInPercent().toFixed(2) + '%'}</span>
                <span className="label label-warning">({votes.angular} votes)</span>
                <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-danger"
                         style={{width: this.votesAngularInPercent() + '%'}}></div>
                </div>
                <span className="label label-info">React: {this.votesReactInPercent().toFixed(2) + '%'}</span>
                <span className="label label-warning">({votes.react} votes)</span>
                <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-info"
                         style={{width: this.votesReactInPercent() + '%'}}></div>
                </div>
                <span className="label label-success">Vue.js: {this.votesVuejsInPercent().toFixed(2) + '%'}</span>
                <span className="label label-warning">({votes.vuejs} votes)</span>
                <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-success"
                         style={{width: this.votesVuejsInPercent() + '%'}}></div>
                </div>
            </div>
        )
    }
}

Results = connect((state) => ({votes: state.votes}))(Results);

export default Results;