import React from 'react';

function ToDoItem({task, mobile, onTodoClear, onTodoDelete}) {

    return (
        <div className={`to-do-item ${task.clear ? 'clear' : ''}`}>
            <div className="to-do-item__block" onClick={() => onTodoClear(task.id)}>
                <div className="to-do-item__checkbox"/>
                <div className="to-do-item__text">{task.text}</div>
            </div>
            <div className={`to-do-item__delete ${mobile ? 'mobile' : ''}`} onClick={() => onTodoDelete(task.id)} />
        </div>
    );
}

export default ToDoItem;