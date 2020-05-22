import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts, deletePost } from '../../actions/posts';

export class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired,
        getPosts: PropTypes.func. isRequired,
        deletePost: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <div>
            <Fragment>
                    <h2>All Posts</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                    <td>{post.content}</td>
                                    <td>
                                        <button onClick={this.props.deletePost.bind(this, post.id)} className="btn btn-danger btn-sm"> {" "} Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </Fragment>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, { getPosts, deletePost })(Posts);
