import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Toast from '../Common/Toast';
import * as MainActions from '../../actions/main';

class Main extends Component {
    componentWillReceiveProps(nextProps) {
        const { urlAbout } = nextProps;
        const { actions, history } = this.props;
        if (urlAbout.apiCurrentPath) {
            actions.changePath(''); 
            history.push(urlAbout.apiCurrentPath);
        }
    }

    render() {
        const { isShow, content } = this.props.toast;
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

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(MainActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);;
