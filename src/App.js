import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreator from './actions';
import './App.css';

class App extends Component {

    getTotal() {
        var t = this.props.votes;
        return Object.keys(t).reduce((a, b) => a + t[b], 0)
    }

    handleVoteAngular = () => {
        this.props.voteAngular()
    }

    handleVoteReact = () => {
        this.props.voteReact()
    }

    handleVoteVuejs = () => {
        this.props.voteVuejs()
    }

    componentDidMount = () => {
        this.props.voteInit();
    }

    render() {
        return (
            <div>
                <div className="jumbotron" style={{'textAlign': 'center'}}>
                    <img src="ctsw_logo.png" height="96" alt="https://github.com/seeschweiler/redux-voting"/>
                    <h2>What's your favorite front-end framework in 2017?</h2>
                    <h4>Click on the logos below to vote! <span
                        className="label label-warning">(current total {this.getTotal()} votes)</span></h4>
                    <br/>
                    <div className="row">
                        <div className="col-xs-offset-3 col-xs-2">
                            <img src="angular_logo.png" height="96" alt="Angular" title="Angular"
                                 onClick={this.handleVoteAngular}
                                 style={{'cursor': 'pointer'}}/>
                        </div>
                        <div className="col-xs-2">
                            <img src="react_logo.png" height="96" alt="React" title="React"
                                 onClick={this.handleVoteReact}
                                 style={{'cursor': 'pointer'}}/>
                        </div>
                        <div className="col-xs-2">
                            <img src="vuejs_logo.png" height="96" alt="VueJS" title="VueJS"
                                 onClick={this.handleVoteVuejs}
                                 style={{'cursor': 'pointer'}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({votes: state.votes})

//{voteVuejs, voteAngular, voteReact, voteInit}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreator, dispatch);
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
