import assign from 'object-assign';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MainActions from '../../actions/main';
import * as LoginActions from '../../actions/login';
import { isEmail, passwordLength } from '../../utils/validator';
import './login.scss';

class Login extends Component {
    constructor() {
        super();
        this.handleFocus = this.handleFocus.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleLoginEmailChange = this.handleLoginEmailChange.bind(this);
        this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);
    }

    handleFocus(e) {
        e.currentTarget.getElementsByTagName('input')[0].focus();
    }

    handleLoginEmailChange(e) {
        const email = e.target.value.trim();
        const { actions } = this.props;
        actions.loginEmailChange(email);
    }

    handleLoginPasswordChange(e) {
        const password = e.target.value.trim();
        const { actions } = this.props;
        actions.loginPasswordChange(password);
    }

    handleLoginSubmit() {
        const { email, password, actions } = this.props;
        if (!isEmail(email)) {
            actions.showSimpleToast({ content: '邮箱格式错误'});
        } else if (!passwordLength(password)) {
            actions.showSimpleToast({ content: '密码长度必须6至16位'});
        } else {
            actions.loginUser({ email: email, password: password});
        }
    }

    render() {
        const { email, password, apiLoading } = this.props;
        return (
            <div className="login">
                <div className="image-wrap">
                    <img src={require('../../static/images/book.png')} />
                    <div className="title">书香门第</div>
                </div>
                <div className="main-form">
                    <div className="input-group" onClick={this.handleFocus}>
                        <img src={require('../../static/images/icon_email.png')} />
                        <div className="input-span">邮箱：</div>
                        <input type="text" className="text-input" value={email} onChange={this.handleLoginEmailChange} placeholder="请输入邮箱"/>
                    </div>
                    <div className="input-group" onClick={this.handleFocus}>
                        <img src={require('../../static/images/icon_password.png')} />
                        <div className="input-span">密码：</div>
                        <input type="password" className="text-input" value={password} onChange={this.handleLoginPasswordChange} placeholder="请输入密码"/>
                    </div>
                </div>
                {
                    apiLoading ? <div className="grey-btn">登陆</div> :
                    <div className="blue-btn" onClick={this.handleLoginSubmit}>登陆</div>
                }
                <Link className="link-blue-btn" to="/register">注册</Link>
            </div>
        );
    }
}

Login.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    apiLoading: PropTypes.bool,
    actions: PropTypes.object
}

function mapStateToProps(state) {
    return state.login.toJS();
}

function mapDispatchToProps(dispatch) {
    let actions = assign({}, MainActions, LoginActions);
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
