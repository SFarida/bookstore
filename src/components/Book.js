import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ category, title, author, progress, chapter }) => {
    return (
        <li className="list-item">
            <div className="row">
                <div className="col-6">
                    <h6 className="School-of">{category}</h6>
                    <h3 className="title">{title}</h3>
                    <p className="author">{author}</p>
                    <ul className="d-flex flex-wrap ps-0">
                        <li className="list-group-item pe-2">Comments</li>
                        <li className="list-group-item px-2">|</li>
                        <li className="list-group-item px-2">Remove</li>
                        <li className="list-group-item px-2">|</li>
                        <li className="list-group-item px-2">Edit</li>
                    </ul>
                </div>
                <div className="col-2">
                    {progress}
                </div>
                <div className="col-4 border-start ps-5">
                    <p className="Current-Chapter">CURRENT CHAPTER</p>
                    <p className="Current-Lesson">{chapter}</p>
                    <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
                </div>
            </div>
        </li>
    );
};

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default Book;