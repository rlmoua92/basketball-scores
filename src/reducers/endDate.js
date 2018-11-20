import { SET_END_DATE } from '../actions/types';

const endDate = (state = '', action) => {
    switch (action.type) {
        case SET_END_DATE:
            return action.date;
        default:
            return state;
    }
}

export default endDate;