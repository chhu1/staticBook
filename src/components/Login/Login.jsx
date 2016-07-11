import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as MainActions from '../../actions/main';

import fetch from '../../middleware/apis'

class Login extends Component {
    constructor() {
        super();
        this.showToast = this.showToast.bind(this);
    }

    showToast() {
        const { actions } = this.props,
            span = '123' ;
        actions.showSimpleToast({content: `点击了${span}`});
    }

    render() {
        return (
            <div className="login">
                <div onClick={this.showToast}>123</div>
                <Link to="register">登陆</Link>
            </div>
        );
    }
}

Login.propTypes = {
    actions: PropTypes.object
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(MainActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
