import * as types from '../constants/ActionsBook';

const bookReducer = (book = {loaded: false}, action) => {
    switch (action.type) {
        case `${types.SINGLE_BOOK}_FULFILLED`:
            return {
                book: action.payload,
                err: null,
                loaded: true
            };
        case `${types.SINGLE_BOOK}_REJECTED`:
            return {
                book: null,
                err: action.payload,
                loaded: true
            };
        default:
            return book;
    }
};

export default bookReducer;
