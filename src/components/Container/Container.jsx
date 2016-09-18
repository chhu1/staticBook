import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as containerAction from '../../actions/container';
import BottomNav from './BottomNav';


class Container extends Component {
    constructor() {
        super();
        this.changeBottomNav = this.changeBottomNav.bind(this);
    }

    componentDidMount() {
        const { actions, location: { pathname } } = this.props;
        actions.setBottomNavActive(pathname.slice(1));
    }

    changeBottomNav(e) {
        const { actions } = this.props;
        actions.changeBottomNav(e.currentTarget.getAttribute('data-param'));
    }

    render() {
        const { activeBottomNav } = this.props;
        return (
            <section className="container">
                {this.props.children}
                <BottomNav activeBottomNav={activeBottomNav} changeBottomNav={this.changeBottomNav}/>
            </section>
        );
    }
}

Container.propTypes = {
    changeBottomNav: PropTypes.func,
    activeBottomNav: PropTypes.string,
    children: PropTypes.element,
    actions: PropTypes.object
}

function mapStateToProps(state) {
    return state.container.toJS();
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(containerAction, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
