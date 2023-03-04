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
        <div className="col-lg-4 book_list">
          <h6 className="School-of font_montserrat">{category}</h6>
          <h3 className="title font_robotoSlab">{title}</h3>
          <p className="author font_robotoSlab">{author}</p>
          <ul className="d-flex flex-wrap ps-0">
            <li className="list-group-item pe-2 pt-2 pb-2 font_robotoSlab">
              <button className="" type="button">Comments</button>
            </li>
            <li className="list-group-item p-2 d-flex align-items-center font_robotoSlab">|</li>
            <li className="list-group-item p-2 font_robotoSlab">
              <button
                className=""
                type="button"
                onClick={async () => {
                  await dispatch(deleteBook(itemId));
                  await dispatch(getBooks());
                }}
              >
                Remove
              </button>
            </li>
            <li className="list-group-item p-2 d-flex align-items-center font_robotoSlab">|</li>
            <li className="list-group-item p-2 font_robotoSlab">
              <button className="" type="button">Edit</button>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 d-flex flex-wrap justify-content-center align-items-center progress_div">
          <div className="progress">&nbsp;</div>
          <div className="d-flex flex-column flex-wrap align-items-center">
            <span className="fs-2">65%</span>
            <span className="Current-Chapter font_robotoSlab">Completed</span>
          </div>
        </div>
        <div className="col-lg-4 border-start ps-5 d-flex justify-content-center flex-column chapter">
          <p className="Current-Chapter font_robotoSlab">CURRENT CHAPTER</p>
          <p className="Current-Lesson font_robotoSlab">Chapter 17</p>
          <button type="button" className="btn azure-btn">UPDATE PROGRESS</button>
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
