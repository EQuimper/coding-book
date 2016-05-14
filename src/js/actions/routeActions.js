import { singleBook } from './bookActions';

export const initializeBook = (nextState, replaceState) => {
    return singleBook(nextState.params.id);
};
