import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Toast from '../Common/Toast';
import * as MainActions from '../../actions/main';

class Main extends Component {
    render() {
        const { isShow, content } = this.props;
        return (
            <div className="main1">
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
