import React, { Component } from 'react';

class Field extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showClear: false
        }
    }

    componentDidMount() {
        this.input.focus();
    }

    handleTodoAdd(e) {
        const input = e.target;

        if (!/^\s*$/.test(input.value) && e.keyCode === 13) {
            this.props.onTodoAdd(input);
            input.value = '';
            this.setShowClear(false);
        }
    }

    handleValueCheck(e) {
        if (e.target.value !== '') {
            this.setShowClear(true);
        } else {
            this.setShowClear(false);
        }
    }

    handleInputClear() {
        this.input.value = '';
        this.setShowClear(false);
        this.input.focus();
    }

    setShowClear(value) {
        this.setState({
            showClear: value
        })
    }

    render() {
        const {showClear} = this.state;

        return (
            <div className="field">
                <input
                    className="field__input"
                    type="text"
                    placeholder="Что нужно сделать?"
                    onKeyDown={::this.handleTodoAdd}
                    onChange={::this.handleValueCheck}
                    ref={ref => {this.input = ref;}}
                />
                <div
                    className={`field__clear-button ${showClear ? 'show' : ''}`}
                    onClick={::this.handleInputClear}
                />
            </div>
        )
    }
}

export default Field;