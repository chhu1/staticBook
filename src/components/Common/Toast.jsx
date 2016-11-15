import React, { Component, PropTypes } from 'react';

import './toast.scss';

class Toast extends Component {
    render() {
        const { isShow, content } = this.props;
        return isShow ? <div className="toast">{content}</div> : null;
    }
}

Toast.propTypes = {
    isShow: PropTypes.bool,
    content: PropTypes.string
};

export default Toast;
