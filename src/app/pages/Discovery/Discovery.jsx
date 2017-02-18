import assign from 'object-assign';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as discoveryActions from './action';
import * as MainActions from '../../containers/Main/action';
import Pagination from '../../components/Pagination/Pagination';

import './discovery.scss';

class Discovery extends Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentWillMount() {
        const { actions, pageSize, pageNumber, isFirst } = this.props;
        isFirst && actions.getBookList({ pageSize: pageSize, pageNumber: pageNumber });
    }

    handleScroll() {
        const { apiLoading, noMoreData, actions, pageSize, pageNumber } = this.props;
        if (document.body.clientHeight <= document.body.scrollTop + document.documentElement.clientHeight + 30) {
            if (!apiLoading && !noMoreData) {
                actions.getBookList({ pageSize: pageSize, pageNumber: pageNumber });
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    renderBookItem(item) {
        console.log(item);
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
        );
    }

    render() {
        const { bookList, apiLoading } = this.props;
        return (
            <section className="discovery">
                <div className="discovery-scroll-wrap">
                    <Pagination data={bookList} isLoading={apiLoading} renderItem={this.renderBookItem} />
                </div>
            </section>
        );
    }
}

Discovery.propTypes = {
    bookList: PropTypes.array,
    apiLoading: PropTypes.bool
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

