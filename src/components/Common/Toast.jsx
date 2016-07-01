import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './toast.scss';

class Toast extends Component {
    render() {
        const { isShow, content } = this.props;
        if (isShow) {
            return (
                <div className="toast">{ content }</div>
            )
        }
        return null;
    }
}

Toast.propTypes = {
    isShow: PropTypes.bool,
    content: PropTypes.string
};

function mapStateToProps(state) {
    return state.main.toJS();
}

export default connect(mapStateToProps)(Toast);
