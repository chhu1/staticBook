import React, { Component, PropTypes } from 'react';

class Main extends Component {
    render() {
        return (
            <div className="main">
                {this.props.children}
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.element
};

export default Main;
