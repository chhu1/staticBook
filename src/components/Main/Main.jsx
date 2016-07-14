import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Toast from '../Common/Toast';

class Main extends Component {

    render() {
        const { isShow, content } = this.props.toast;
        return (
            <div className="main">
                {this.props.children}
                <Toast isShow={isShow} content={content} />
            </div>
        );
    }
}

Main.propTypes = {
    isShow: PropTypes.bool,
    content: PropTypes.string,
    children: PropTypes.element
}

function mapStateToProps(state) {
    return state.main.toJS();
}

export default connect(mapStateToProps)(Main);;
