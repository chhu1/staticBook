import assign from 'object-assign';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MainActions from '../../actions/main';
import * as RegisterActions from '../../actions/register';
import { isEmail, passwordLength } from '../../utils/validator';
import './register.scss';

class Register extends Component {
    constructor() {
        super();
        this.handleFocus = this.handleFocus.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleRegisterEmailChange = this.handleRegisterEmailChange.bind(this);
        this.handleRegisterPasswordChange = this.handleRegisterPasswordChange.bind(this);
        this.handleRegisterRepeatPasswordChange = this.handleRegisterRepeatPasswordChange.bind(this);
    }

    handleFocus(e) {
        e.currentTarget.getElementsByTagName('input')[0].focus();
    }

    handleRegisterEmailChange(e) {
        const email = e.target.value.trim();
        const { actions } = this.props;
        actions.registerEmailChange(email);
    }

    handleRegisterPasswordChange(e) {
        const password = e.target.value.trim();
        const { actions } = this.props;
        actions.registerPasswordChange(password);
    }

    handleRegisterRepeatPasswordChange(e) {
        const repeatPassword = e.target.value.trim();
        const { actions } = this.props;
        actions.registerRepeatPasswordChange(repeatPassword);
    }

    handleRegisterSubmit() {
        const { email, password, repeatPassword, actions } = this.props;
        if (!isEmail(email)) {
            actions.showSimpleToast({ content: '邮箱格式错误'});
        } else if (!passwordLength(password)) {
            actions.showSimpleToast({ content: '密码长度必须6至16位'});
        } else if (password !== repeatPassword) {
            actions.showSimpleToast({ content: '重复密码不一致'});
        } else {
            actions.registerUser({ email: email, password: password});
        }
    }

    render() {
        const { email, password, repeatPassword, apiLoading } = this.props;
        return (
            <div className="register">
                <div className="image-wrap">
                    <img src={require('../../static/images/book.png')} />
                    <div className="title">书香门第</div>
                </div>
                <div className="main-form">
                    <div className="input-group" onClick={this.handleFocus}>
                        <img src={require('../../static/images/icon_email.png')} />
                        <div className="input-span">邮箱：</div>
                        <input type="text" className="text-input" value={email} onChange={this.handleRegisterEmailChange} placeholder="请输入邮箱"/>
                    </div>
                    <div className="input-group" onClick={this.handleFocus}>
                        <img src={require('../../static/images/icon_password.png')} />
                        <div className="input-span">密码：</div>
                        <input type="password" className="text-input" value={password} onChange={this.handleRegisterPasswordChange} placeholder="请输入密码"/>
                    </div>
                    <div className="input-group" onClick={this.handleFocus}>
                        <img src={require('../../static/images/icon_password.png')} />
                        <div className="input-span">重复密码：</div>
                        <input type="password" className="text-input" value={repeatPassword} onChange={this.handleRegisterRepeatPasswordChange} placeholder="请输入重复密码"/>
                    </div>
                </div>
                {
                    apiLoading ? <div className="grey-btn">注册</div> :
                    <div className="blue-btn" onClick={this.handleRegisterSubmit}>注册</div>
                }
            </div>
        );
    }
}

Register.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    repeatPassword: PropTypes.string,
    apiLoading: PropTypes.bool,
    actions: PropTypes.object
}

function mapStateToProps(state) {
    return state.register.toJS();
}

function mapDispatchToProps(dispatch) {
    let actions = assign({}, MainActions, RegisterActions);
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);