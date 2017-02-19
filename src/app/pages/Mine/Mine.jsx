import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './mine.scss';

export default class Mine extends Component {
    render() {
        return (
            <section className="mine">
                <div className="btn-wrap">
                    <Link className="link-blue-btn" to="/bookcontainer/addbook">添加书籍</Link>
                </div>
            </section>
        );
    }
}
