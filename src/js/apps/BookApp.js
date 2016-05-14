import React from 'react';
import { connect } from 'react-redux';

const BookApp = ({book, loaded, err}) => {
    if (!loaded)
        return null;
    else if (err === null)
        return (
            <div>
                <h1>{book.title}</h1>
                <p>{book.description}</p>
            </div>
        );
    else
        return <h4>Book Not Found!</h4>;
};

const mapProps = (state) => state.book;

export default connect(mapProps)(BookApp);
