import React, { Component, PropTypes } from 'react';
import { getCookieValue } from '../../utils/cookie';

class Discovery extends Component {
    render() {
        return (
            <section className="discovery">
                <div>Page: Discovery</div>
                {
                    getCookieValue('token')
                }
            </section>
        );
    }
}

export default Discovery;
