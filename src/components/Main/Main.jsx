import React, { Component, PropTypes } from 'react';

import * as MainActions from '../../actions/main';
import Toast from '../Common/Toast';

class Main extends Component {
    render() {
        return (
            <div className="main1">
                {this.props.children}
                <Toast />
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.element
};

export default Main;
