import pureRender from 'pure-render-decorator';
import React, { Component, PropTypes } from 'react';

@pureRender
class Mine extends Component {
    render() {
        return (
            <section className="mine">
                <div>Page: Mine</div>
            </section>
        );
    }
}

export default Mine;
