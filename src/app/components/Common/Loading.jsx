import React, { Component, PropTypes } from 'react';

import './loading.scss';

class Loading extends Component {
    render() {
        const { isShow } = this.props;
        return isShow ? <div className="loading"></div> : null;
    }
}

Loading.propTypes = {
    isShow: PropTypes.bool
};

export default Loading;
