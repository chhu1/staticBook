import pureRender from 'pure-render-decorator';
import React, { Component, PropTypes } from 'react';

import './toTop.scss';

@pureRender
class ToTop extends Component {
    constructor() {
        super();
        this.state = { showToTop: false };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleToTopClick = this.handleToTopClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        this.setState({ showToTop: scrollTop > ToTop.defaultProps.height });
    }

    handleToTopClick() {
        document.body.scrollTop && (document.body.scrollTop = 0);
        document.documentElement.scrollTop && (document.documentElement.scrollTop = 0);
    }

    render() {
        const { showToTop } = this.state;
        return showToTop ? <div className="to-top" onClick={this.handleToTopClick}>返回顶部</div> : null;
    }
}

ToTop.defaultProps = {
    height: document.documentElement.clientHeight || document.body.clientHeight
};

export default ToTop;
