import assign from 'object-assign';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AddBookActions from './action';
import * as MainActions from '../../containers/Main/action';

class AddBook extends Component {
    constructor() {
        super();
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleAddBookSubmit = this.handleAddBookSubmit.bind(this);
    }

    handleNameChange(e) {
        const name = e.target.value.trim();
        this.props.actions.addBookNameChange(name);
    }

    handleDescChange(e) {
        const desc = e.target.value.trim();
        this.props.actions.addBookDescChange(desc);
    }

    handleAuthorChange(e) {
        const author = e.target.value.trim();
        this.props.actions.addBookAuthorChange(author);
    }

    handleCompanyChange(e) {
        const author = e.target.value.trim();
        this.props.actions.addBookCompanyChange(author);
    }

    handleCategoryChange(e) {
        this.props.actions.addBookCategoryChange(e.currentTarget.getAttribute('data-category'));
    }

    handleAddBookSubmit() {
        const { name, desc, author, company, categoryId, actions } = this.props;
        this.props.actions.addBook({ name, desc, author, company, categoryId });
    }

    render() {
        const { name, desc, author, company, categoryId, categoryIds, apiLoading } = this.props;
        return (
            <section className="news">
                <div>Page: AddBook</div>
                <input type="text" className="text-input" value={name} onChange={this.handleNameChange}/>
                <textarea type="text" className="text-input" value={desc} onChange={this.handleDescChange}></textarea>
                <input type="text" className="text-input" value={author} onChange={this.handleAuthorChange}/>
                <input type="text" className="text-input" value={company} onChange={this.handleCompanyChange}/>
                <ul>
                {
                    categoryIds.map(category => <li key={category.id} onClick={this.handleCategoryChange} data-category={category.id}>{category.name}</li>)
                }
                </ul>
                {
                    apiLoading ? <div className="grey-btn">保存</div> :
                    <div className="blue-btn" onClick={this.handleAddBookSubmit}>保存</div>
                }
            </section>
        );
    }
}

AddBook.defaultProps = { 
    categoryIds: [
        { id: 1, name: '小说' },
        { id: 2, name: '经济学' }
    ]
};

AddBook.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    author: PropTypes.string,
    company: PropTypes.string,
    categoryId: PropTypes.number,
    apiLoading: PropTypes.bool,
    actions: PropTypes.object
}

function mapStateToProps(state) {
    return state.addBook.toJS();
}

function mapDispatchToProps(dispatch) {
    let actions = assign({}, MainActions, AddBookActions);
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
