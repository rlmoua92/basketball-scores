import { SET_IS_LOADING } from '../actions/types';

const isLoading = (state = false, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export default isLoading;