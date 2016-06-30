import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div>123</div>
                <Link to="login">登陆</Link>
            </div>
        );
    }
}

export default Login;