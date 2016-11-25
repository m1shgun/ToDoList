import React from 'react';

const Sample = (props) => {
    const {sample, onActionOne, onActionTwo} = props;

    return (
        <div className="counter__container">
            <div className="counter__number">{sample}</div>
            <button
                className="counter__button"
                onClick={() => onActionOne()}
            >
                Увеличить
            </button>
            <button
                className="counter__button second"
                onClick={() => onActionTwo()}
            >
                Сброс
            </button>
            <div>
                <img src="../../img/del.png" alt="del"/>
                <img src="../../img/trash.png" alt="trash"/>
                <img src="../../img/search.png" alt="search"/>
                <img src="../../img/up.png" alt="up"/>
            </div>
        </div>
    )
};

export default Sample;