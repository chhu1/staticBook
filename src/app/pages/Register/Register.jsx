import assign from 'object-assign';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegisterActions from './action';
import * as MainActions from '../../containers/Main/action';
import { EmailInput, PasswordInput } from '../../components/Common/Input';
import { isEmail, passwordLength } from '../../../utils/validator';
import './register.scss';

class Register extends Component {
    constructor() {
        super();
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleRegisterEmailChange = this.handleRegisterEmailChange.bind(this);
        this.handleRegisterPasswordChange = this.handleRegisterPasswordChange.bind(this);
        this.handleRegisterRepeatPasswordChange = this.handleRegisterRepeatPasswordChange.bind(this);
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
                    <img src={require('../../../static/images/book.png')} />
                    <div className="title">书香门第</div>
                </div>
                <div className="main-form">
                    <EmailInput value={email} handleChange={this.handleRegisterEmailChange} />
                    <PasswordInput value={password} handleChange={this.handleRegisterPasswordChange} />
                    <PasswordInput value={repeatPassword} handleChange={this.handleRegisterRepeatPasswordChange} />
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