import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Toast from '../../components/Common/Toast';
import Loading from '../../components/Common/Loading';

class Main extends Component {
    render() {
        const { toast: { isShowToast, content }, loading: { isShowLoading } } = this.props;
        return (
            <section className="main">
                {this.props.children}
                <Toast isShow={isShowToast} content={content}/>
                <Loading isShow={isShowLoading}/>
            </section>
        );
    }
}

Main.propTypes = {
    toast: PropTypes.shape({
        content: PropTypes.string,
        isShowToast: PropTypes.bool
    }),
    loading: PropTypes.shape({
        isShowLoading: PropTypes.bool
    }),
    children: PropTypes.element
}

function mapStateToProps(state) {
    return state.main.toJS();
}

export default connect(mapStateToProps)(Main);
