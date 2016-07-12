import assign from 'object-assign';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as MainActions from '../../actions/main';
import * as RegisterActions from '../../actions/register';
import { isEmail, passwordLength } from '../../utils/validator';
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
        const repeatpassword = e.target.value.trim();
        const { actions } = this.props;
        actions.registerRepeatPasswordChange(repeatpassword);
    }

    handleRegisterSubmit() {
        const { email, password, repeatpassword, actions } = this.props;
        if (!isEmail(email)) {
            actions.showSimpleToast({ content: '邮箱格式错误'});
        } else if (!passwordLength(password)) {
            actions.showSimpleToast({ content: '密码长度必须6至16位'});
        } else if (password !== repeatpassword) {
            actions.showSimpleToast({ content: '重复密码不一致'});
        } else {
            actions.registerUser({ email: email, password: password});
        }
    }

    render() {
        const { email, password, repeatpassword } = this.props;
        return (
            <div className="register">
                <div className="image-wrap">
                    <img src={require('../../static/images/book.png')} />
                    <div className="title">书香门第</div>
                </div>
                <div className="line">
                    <label>邮箱</label>
                    <input type="text" className="input" value={email} onChange={this.handleRegisterEmailChange} />
                </div>
                <div className="line">
                    <label>密码</label>
                    <input type="password" className="input" value={password} onChange={this.handleRegisterPasswordChange} />
                </div>
                <div className="line">
                    <label>重复密码</label>
                    <input type="password" className="input" value={repeatpassword} onChange={this.handleRegisterRepeatPasswordChange} />
                </div>
                <div onClick={this.handleRegisterSubmit}>注册</div>
            </div>
        );
    }
}

Register.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    repeatpassword: PropTypes.string,
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