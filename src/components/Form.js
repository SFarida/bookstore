import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getBooks, postBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    { name: 'Action', id: '1' },
    { name: 'Classic', id: '2' },
    { name: 'Crime', id: '3' },
    { name: 'Fantasy', id: '4' },
    { name: 'Humour', id: '5' },
  ];

  const onTitleChange = (e) => setTitle(e.target.value);
  const onAuthorChange = (e) => setAuthor(e.target.value);
  const onCategoryChange = (e) => setCategory(e.target.value);
  const canSave = Boolean(title) && Boolean(author) && Boolean(category);
  const onSaveBook = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        postBook({
          item_id: nanoid(),
          title,
          author,
          category,
        }),
      );
      setTitle('');
      setAuthor('');
      setCategory('');
      await dispatch(getBooks());
    } catch (err) {
      console.error('Failed to save the book', err);
    }
  };

  return (
    <div className="container">
      <h3 className="new_book">ADD NEW BOOK</h3>
      <form className="form">
        <div className="row">
          <div className="col-md m-2">
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
          <div className="col-md m-2">
            <select
              className="w-100 select"
              id="category"
              name="category"
              onChange={onCategoryChange}
            >
              <option value="">Category</option>
              {
                categories.map((category) => (
                  <option value={category.name} key={category.id}>
                    {category.name}
                  </option>
                ))
              }
            </select>
          </div>
          <div className="col-md m-2">
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
          <div className="col-md m-2">
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
