import React, { Component, PropTypes } from 'react';
import './input.scss';

class SimpleInput extends Component {
    constructor() {
        super();
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleFocus(e) {
        e.currentTarget.getElementsByTagName('input')[0].focus();
    }

    render() {
        const { value, handleChange } = this.props;
        return (
            <div className="input-group" onClick={this.handleFocus}>
                <input type="text" className="text-input" value={value} onChange={handleChange} />
            </div>
        )
    }
}

SimpleInput.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func
};

class EmailInput extends SimpleInput {
    render() {
        const { value, handleChange } = this.props;
        return (
            <div className="simple-input-group" onClick={this.handleFocus}>
                <img src={require('../../../static/images/icon_email.png')} />
                <div className="input-span">邮箱：</div>
                <input type="text" className="text-input" value={value} onChange={handleChange} placeholder="请输入邮箱"/>
            </div>
        )
    }
}

class PasswordInput extends SimpleInput {
    render() {
        const { value, handleChange } = this.props;
        return (
            <div className="simple-input-group" onClick={this.handleFocus}>
                <img src={require('../../../static/images/icon_password.png')} />
                <div className="input-span">密码：</div>
                <input type="password" className="text-input" value={value} onChange={handleChange} placeholder="请输入密码"/>
            </div>
        )
    }
}

export { EmailInput, PasswordInput };
