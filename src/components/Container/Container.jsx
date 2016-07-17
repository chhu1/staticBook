import React, { Component, PropTypes } from 'react';

class Container extends Component {
    render() {
        return (
            <section className="container">
                {this.props.children}
            </section>
        );
    }
}

Container.propTypes = {
    children: PropTypes.element
}

export default Container;
