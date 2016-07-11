import assign from 'object-assign';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as MainActions from '../../actions/main';
import * as RegisterActions from '../../actions/register';

class Register extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.jsLink = this.jsLink.bind(this);
    }

    handleSubmit() {
        const { actions } = this.props,
            span = '注册' ;
        actions.showSimpleToast({content: `点击了${span}`});
        actions.registerUser();
    }

    jsLink() {
        let { history } = this.props;
        history.push('/login');
    }

    render() {
        return (
            <div className="login">
                <div onClick={this.handleSubmit}>注册</div>
                <div onClick={this.jsLink}>跳转</div>
            </div>
        );
    }
}

Register.propTypes = {
    actions: PropTypes.object
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    let actions = assign({}, MainActions, RegisterActions);
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);