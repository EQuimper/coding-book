import req from 'superagent';

import * as types from '../constants/ActionsBook';

export const singleBook = (id) => {
    const promise = new Promise((resolve, reject) => {
        req
            .get(`/api/books/${id}`)
            .end((err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res.body);
            });
    });
    return {
        type: types.SINGLE_BOOK,
        payload: promise
    };
};
