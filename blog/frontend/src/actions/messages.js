import { CREATE_MESSAGE } from './types';
import { bindActionCreators } from 'redux';

//CREATE_MESSAGE
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};