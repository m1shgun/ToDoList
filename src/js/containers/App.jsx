import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions/actions';
import Sample from '../components/Sample.jsx';
import DevTools from '../redux/utils/devtools';

class App extends Component {
    render() {
        const {value} = this.props.sample;
        const {actionOne, actionTwo} = this.props.actions;

        return (
            <div className="app">
                <Sample
                    sample={value}
                    onActionOne={actionOne}
                    onActionTwo={actionTwo}
                />
                <DevTools />
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        sample: state.sample
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);