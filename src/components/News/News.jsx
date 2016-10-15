import pureRender from 'pure-render-decorator';
import React, { Component, PropTypes } from 'react';

@pureRender
class News extends Component {
    render() {
        return (
            <section className="news">
                <div>Page: News</div>
            </section>
        );
    }
}

export default News;
