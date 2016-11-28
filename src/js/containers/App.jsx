import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions/actions';
import Field from '../components/Field.jsx';
import ToDoList from '../components/ToDoList.jsx';
import Sort from '../components/Sort.jsx';
import DevTools from '../redux/utils/devtools';

class App extends Component {

    static propTypes = {
        tasks: React.PropTypes.array.isRequired,
        filter: React.PropTypes.string.isRequired,
        actions: React.PropTypes.object.isRequired
    };

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    _updateLocalStorage() {
        const {tasks} = this.props;
        localStorage.tasks = JSON.stringify(tasks);
        localStorage.count = tasks[tasks.length - 1].id
    }

    render() {
        const {tasks} = this.props;
        const {filter} = this.props;
        const {
            addTodo,
            clearTodo,
            deleteTodo,
            deleteAll,
            changeFilter
        } = this.props.actions;

        return (
            <div className="app">
                <Field
                    onTodoAdd={addTodo}
                />
                <Sort
                    filter={filter}
                    onFilterChange={changeFilter}
                    onAllDelete={deleteAll}
                />
                <ToDoList
                    tasks={tasks}
                    filter={filter}
                    onTodoClear={clearTodo}
                    onTodoDelete={deleteTodo}
                />
                {
                    NODE_ENV === 'development' ? <DevTools /> : null
                }
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);