import React, { Component, PropTypes } from 'react';
import { getCookieValue } from '../../utils/cookie';

class Discovery extends Component {
    render() {
        return (
            <section className="discovery">
                {
                    getCookieValue('token')
                }
            </section>
        );
    }
}

export default Discovery;
