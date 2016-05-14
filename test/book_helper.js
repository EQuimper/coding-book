import { List, Map } from 'immutable';
import { expect } from 'chai';

import { addBook } from '../src/js/actions/BookActions';

describe('Book Logic', () => {
    it('Add a new book to the state', () => {
        const state = Map();
        const books = List.of('Eloquent JavaScript', 'Survive.js');
        const nextState = addBook(state, books);

        expect(nextState).to.equal(Map({
            books: List.of('Eloquent JavaScript', 'Survive.js')
        }));
    });

    it('Convert to immutable', () => {
        const state = Map();
        const books = ['Eloquent JavaScript', 'Survive.js'];
        const nextState = addBook(state, books);
        
        expect(nextState).to.equal(Map({
            books: List.of('Eloquent JavaScript', 'Survive.js')
        }));
    });
});
