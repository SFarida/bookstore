import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChange = (e) => setTitle(e.target.value);
  const onAuthorChange = (e) => setAuthor(e.target.value);
  const canSave = Boolean(title) && Boolean(author);
  const onSaveBook = (e) => {
    e.preventDefault();
    dispatch(
      addBook(title, author),
    );
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="container">
      <h3 className="new_book">ADD NEW BOOK</h3>
      <form className="form">
        <div className="row">
          <div className="col-md">
            <input
              className="w-100 input_book"
              placeholder="Book title"
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={onTitleChange}
            />
          </div>
          <div className="col-md">
            <input
              className="w-100 input_book"
              placeholder="Book Author"
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={onAuthorChange}
            />
          </div>
          <div className="col-md">
            <button
              className="btn btn-primary w-100"
              type="submit"
              onClick={onSaveBook}
              disabled={!canSave}
            >
              ADD BOOK
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
