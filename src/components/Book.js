import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Book = (
  {
    category, title, author, itemId,
  },
) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);
  const checkBookStatus = () => {
    dispatch(checkStatus());
  };
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
              <button type="button" onClick={() => dispatch(removeBook(itemId))}>Remove</button>
            </li>
            <li className="list-group-item px-2">|</li>
            <li className="list-group-item px-2">
              <button type="button">Edit</button>
            </li>
          </ul>
        </div>
        <div className="col-2">
          {/* {progress} */}
        </div>
        <div className="col-4 border-start ps-5">
          <p className="Current-Chapter">{status}</p>
          {/* <p className="Current-Lesson">{chapter}</p> */}
          <button type="button" className="btn btn-primary" onClick={checkBookStatus}>UPDATE STATUS</button>
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
  // chapter: PropTypes.string.isRequired,
  // progress: PropTypes.number.isRequired,
};

export default Book;
