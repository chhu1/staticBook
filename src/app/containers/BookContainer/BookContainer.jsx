import React, { Component, PropTypes } from 'react';

export default class BookContainer extends Component {
    render() {
        return (
            <section className="book-container">
                {this.props.children}
            </section>
        );
    }
}

BookContainer.propTypes = {
    children: PropTypes.element
}
