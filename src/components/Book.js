import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, getBooks } from '../redux/books/booksSlice';

const Book = (
  {
    category, title, author, itemId,
  },
) => {
  const dispatch = useDispatch();
  return (
    <li className="list-item">
      <div className="row">
        <div className="col-6">
          <h6 className="School-of">{category}</h6>
          <h3 className="title">{title}</h3>
          <p className="author">{author}</p>
          <ul className="d-flex flex-wrap ps-0">
            <li className="list-group-item pe-2">
              <button type="button">Comments</button>
            </li>
            <li className="list-group-item px-2">|</li>
            <li className="list-group-item px-2">
              <button
                type="button"
                onClick={async () => {
                  await dispatch(deleteBook(itemId));
                  await dispatch(getBooks());
                }}
              >
                Remove
              </button>
            </li>
            <li className="list-group-item px-2">|</li>
            <li className="list-group-item px-2">
              <button type="button">Edit</button>
            </li>
          </ul>
        </div>
        <div className="col-4 border-start ps-5">
          <p className="Current-Chapter">CURRENT CHAPTER</p>
          <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
