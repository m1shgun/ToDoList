import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ToDoItem from './ToDoItem.jsx';

function ToDoList({tasks, filter, onTodoClear, onTodoDelete}) {

    if (filter !== 'all') {
        tasks = filter === 'done'
            ? tasks.filter(task => task.clear)
            : tasks.filter(task => !task.clear);
    }

    return (
        <div className="to-do-list">
            <ReactCSSTransitionGroup
                transitionName="todo"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={300}
                transitionLeave={false}
            >
                {
                    tasks.length > 0
                    ?
                        tasks.map((task) => (
                            <ToDoItem
                                key={task.id}
                                task={task}
                                onTodoClear={onTodoClear}
                                onTodoDelete={onTodoDelete}
                            />
                        ))
                    :  <div className="to-do-list__empty">Пусто...</div>
                }
            </ReactCSSTransitionGroup>
        </div>
    );
}

export default ToDoList;