import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as tasksActions from '../redux/actions/tasksActions';
import * as filterActions from '../redux/actions/filterActions';
import Field from '../components/Field.jsx';
import ToDoList from '../components/ToDoList.jsx';
import Sort from '../components/Sort.jsx';
import DevTools from '../redux/utils/devtools';

class App extends Component {

    static propTypes = {
        tasks: PropTypes.array.isRequired,
        filter: PropTypes.string.isRequired,
        tasksActions: PropTypes.object.isRequired,
        filterActions: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        //to remove :hover on mobile devices
        this.mobile = !!('ontouchstart' in window);
    }

    render() {
        const {tasks, filter} = this.props;
        const {
            addTodo,
            clearTodo,
            deleteTodo,
            deleteAll
        } = this.props.tasksActions;
        const {changeFilter} = this.props.filterActions;

        return (
            <div className="app">
                <h1 className="app__title">ToDo</h1>
                <div className="app__content">
                    <Field
                        tasks={tasks}
                        mobile={this.mobile}
                        onTodoAdd={addTodo}
                    />
                    <Sort
                        filter={filter}
                        mobile={this.mobile}
                        onFilterChange={changeFilter}
                        onAllDelete={deleteAll}
                    />
                    <ToDoList
                        tasks={tasks}
                        filter={filter}
                        mobile={this.mobile}
                        onTodoClear={clearTodo}
                        onTodoDelete={deleteTodo}
                    />
                </div>
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
        tasksActions: bindActionCreators(tasksActions, dispatch),
        filterActions: bindActionCreators(filterActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);