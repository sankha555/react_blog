import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addPost } from "../../actions/posts";

export class Form extends Component {

    static propTypes = {
        addPost: PropTypes.func.isRequired
    };

    state = {
        title: "",
        author: "",
        content: ""
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = e => {
        e.preventDefault();
        const { title, author, content } = this.state;
        const post = { title, author, content };
        this.props.addPost(post);
        this.setState({
            title: "",
            author: "",
            content: ""
        })
    }

    render() {

        const {title, author, content} = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Post</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input
                            className="form-control"
                            type="text"
                            name="author"
                            onChange={this.onChange}
                            value={author}
                        />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="content"
                            onChange={this.onChange}
                            value={content}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addPost })(Form);
