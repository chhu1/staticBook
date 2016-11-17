import assign from 'object-assign';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from './action';
import * as MainActions from '../../containers/Main/action';
import { EmailInput, PasswordInput } from '../../components/Common/Input';
import { isEmail, passwordLength } from '../../../utils/validator';
import './login.scss';

class Login extends Component {
    constructor() {
        super();
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleLoginEmailChange = this.handleLoginEmailChange.bind(this);
        this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);
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
                    <img src={require('../../../static/images/book.png')} />
                    <div className="title">书香门第</div>
                </div>
                <div className="main-form">
                    <EmailInput value={email} handleChange={this.handleLoginEmailChange} />
                    <PasswordInput value={password} handleChange={this.handleLoginPasswordChange} />
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
