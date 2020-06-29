import {
    GET_POST_START,
    GET_POST_SUCCESS,
    GET_POST_FAIL,
    ADD_POST_START,
    ADD_POST_SUCCESS,
    ADD_POST_FAIL,
    EDIT_POST_START,
    EDIT_POST_SUCCESS,
    EDIT_POST_FAIL,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL
} from "../actions"

export const singlePostState = {
    post: {},
    newPost: {},
    editedPost: {},
    isPosting: false,
    isDeleting: false,
    isEditing: false,
    isFetching: false,
    isActionSuccess: false,
    error: ""
}

export const SinglePostReducers = (state = singlePostState, action) => {
    switch (action.type) {
            case GET_POST_START:
                return {
                ...state,
                isFetching: true,
                isActionSuccess: false,
                };
            case GET_POST_SUCCESS:
                return {
                ...state,
                isFetching: false,
                isActionSuccess: true,
                post: action.payload,
                };
            case GET_POST_FAIL:
                return {
                ...state,
                isFetching: false,
                isActionSuccess: false,
                error: action.payload,
                };
        
            case ADD_POST_START:
                return {
                ...state,
                isPosting: true,
                isActionSuccess: false,
                };
            case ADD_POST_SUCCESS:
                return {
                ...state,
                isPosting: false,
                isActionSuccess: true,
                newPost: action.payload,
                };
            case ADD_POST_FAIL:
                return {
                ...state,
                isPosting: false,
                isActionSuccess: false,
                error: action.payload,
                };
        
            case EDIT_POST_START:
                return {
                ...state,
                isUpdating: true,
                isActionSuccess: false,
                };
            case EDIT_POST_SUCCESS:
                return {
                ...state,
                isUpdating: false,
                isActionSuccess: true,
                editedPost: action.payload,
                };
            case EDIT_POST_FAIL:
                return {
                ...state,
                isUpdating: false,
                error: action.payload,
                };
        
            case DELETE_POST_START:
                return {
                ...state,
                isDeleting: true,
                isActionSuccess: false,
                };
            case DELETE_POST_SUCCESS:
                return {
                ...state,
                isDeleting: false,
                isActionSuccess: true,
                allPost: action.payload,
                };
            case DELETE_POST_FAIL:
                return {
                ...state,
                isDeleting: false,
                isActionSuccess: false,
                error: action.payload,
                };
            default:
                return {
                    state
                };
        }
    }