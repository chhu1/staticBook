import assign from 'object-assign';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MainActions from '../../actions/main';
import * as discoveryActions from '../../actions/discovery';

class Discovery extends Component {
    componentDidMount() {
        const { actions } = this.props;
        actions.getBookList();
    }

    render() {
        return (
            <section className="discovery">
                <div>Page: Discovery</div>
            </section>
        );
    }
}

Discovery.propTypes = {
    bookListApiLoading: PropTypes.bool
}

function mapStateToProps(state) {
    return state.discovery.toJS();
}

function mapDispatchToProps(dispatch) {
    let actions = assign({}, MainActions, discoveryActions);
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);

