import axios from 'axios';
import { createMessage } from './messages';

import { GET_POSTS, DELETE_POST, ADD_POST, GET_ERRORS } from './types';

//GET_POSTS
export const getPosts = () => dispatch => {
    axios
        .get('/api/posts/')
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

//DELETE_POSTS
export const deletePost = (id) => dispatch => {
    axios
        .delete(`/api/posts/${id}/`)
        .then(res => {
            dispatch(createMessage({ postDeleted: "Post Deleted" }));
            dispatch({
                type: DELETE_POST,
                payload: id
            });
        })
        .catch(err => console.log(err));
}

//ADD_POST
export const addPost = (post) => dispatch => {
    axios
        .post(`/api/posts/`, post)
        .then(res => {
            dispatch(createMessage({postAdded: "Post Added"}));
            dispatch({
                type: ADD_POST,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
}