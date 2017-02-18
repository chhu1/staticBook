import pureRender from 'pure-render-decorator';
import React, { Component, PropTypes } from 'react';

import './pagination.scss';

@pureRender
export default class Pagination extends Component {
    render() {
        const { data, isLoading, renderItem } = this.props;
        return (
            <section className="pagination">
                {
                    data.length ?
                    <section className="pagination-wrap">
                        {
                            data.map(item => renderItem(item))
                        }
                    </section> : null
                }
                {
                    isLoading ?
                    <div className="pagination-loading">
                        <img src={require('../../../static/images/droploading.gif')} />
                    </div> : null
                }
            </section>
        );
    }
}
