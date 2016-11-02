import assign from 'object-assign';
import pureRender from 'pure-render-decorator';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MainActions from '../../actions/main';
import * as discoveryActions from '../../actions/discovery';

import './discovery.scss';

@pureRender
class Discovery extends Component {
    componentDidMount() {
        const { actions } = this.props;
        actions.getBookList();
    }

    render() {
        const { bookList, bookListApiLoading } = this.props;
        return (
            <section className="discovery">
                {
                    bookListApiLoading ?
                    <div className="page-loading">
                        <img src={require('../../static/images/droploading.gif')} />
                    </div> : null
                }
                {
                    bookList.length ?
                    <section className="wrap">
                        {
                            bookList.map(function(item) {
                                return (
                                    <section className="card" key={item.bookId}>
                                        <div className="card-top">
                                            <p className="name">{item.name}</p>
                                            <p className="author">作者：{item.author}</p>
                                        </div>
                                        <div className="card-body">
                                            <p className="desc">{item.desc}</p>
                                            <p className="company">{item.company}</p>
                                        </div>
                                    </section>
                                )
                            })
                        }
                    </section> : null
                }
            </section>
        );
    }
}

Discovery.propTypes = {
    bookList: PropTypes.array,
    bookListApiLoading: PropTypes.bool
}

function mapStateToProps(state) {
    return state.discovery.toJS();
}

function mapDispatchToProps(dispatch) {
    let actions = assign({}, MainActions, discoveryActions);
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);

