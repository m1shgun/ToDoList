import React, { Component } from 'react';

class Field extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showClear: false
        }
    }

    componentDidMount() {
        this._inputFocus();
    }

    componentDidUpdate() {
        this._inputFocus();
    }

    handleTodoAdd(e) {
        const input = e.target;

        if (!/^\s*$/.test(input.value) && (e.keyCode || e.which) === 13) {
            this.props.onTodoAdd(input);
            input.value = '';
            this._setShowClear(false);
        }
    }

    handleValueCheck(e) {
        if (e.target.value !== '') {
            this._setShowClear(true);
        } else {
            this._setShowClear(false);
        }
    }

    handleInputClear() {
        this.input.value = '';
        this._setShowClear(false);
        this.input.focus();
    }

    _setShowClear(value) {
        this.setState({
            showClear: value
        })
    }

    _inputFocus() {
        const {tasks} = this.props;
        if (tasks.length === 0) {
            this.input.focus();
        }
    }

    render() {
        const {showClear} = this.state;
        const {mobile} = this.props;

        return (
            <div className="field">
                <input
                    className="field__input"
                    type="text"
                    placeholder="Что нужно сделать?"
                    onKeyPress={::this.handleTodoAdd}
                    onChange={::this.handleValueCheck}
                    ref={ref => {this.input = ref;}}
                />
                <div
                    className={`field__clear-button ${showClear ? 'show' : ''} ${mobile ? 'mobile' : ''}`}
                    onClick={::this.handleInputClear}
                />
            </div>
        )
    }
}

export default Field;