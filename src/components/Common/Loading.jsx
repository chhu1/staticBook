import React, { Component, PropTypes } from 'react';

import './loading.scss';

class Loading extends Component {
    render() {
        const { isShow } = this.props;
        if (isShow) {
            return (
                <div className="loading"></div>
            )
        }
        return null;
    }
}

Loading.propTypes = {
    isShow: PropTypes.bool
};

export default Loading;
