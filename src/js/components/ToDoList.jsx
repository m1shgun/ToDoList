import React from 'react';
import ToDoItem from './ToDoItem.jsx'

function ToDoList(props) {
    const {filter, onTodoClear, onTodoDelete} = props;
    let {tasks} = props;

    if (filter !== 'all') {
        tasks = filter === 'done'
            ? tasks.filter(task => task.clear)
            : tasks.filter(task => !task.clear);
    }

    return (
        <div className="to-do-list">
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
        </div>
    );
}

export default ToDoList;