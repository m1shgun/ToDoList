import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions/actions';
import Field from '../components/Field.jsx';
import ToDoList from '../components/ToDoList.jsx';
import Sort from '../components/Sort.jsx';
import DevTools from '../redux/utils/devtools';

class App extends Component {
    render() {
        const {tasks, filter} = this.props.todo;
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
                <DevTools />
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);