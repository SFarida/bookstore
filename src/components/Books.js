import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getBooks,
  getBooksError,
  getBooksStatus,
  selectAllBooks,
} from '../redux/books/booksSlice';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);
  const booksStatus = useSelector(getBooksStatus);
  const error = useSelector(getBooksError);
  // const { books } = useSelector((store) => store.books);

  console.log('books', books, booksStatus);
  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(getBooks());
    }
  }, [booksStatus, dispatch]);

  let content;
  if (booksStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (booksStatus === 'succeeded') {
    content = (
      <ul className="ps-0">
        {
          books.map((book) => (
            <Book
              key={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
              itemId={book.item_id}
            />
          ))
        }
      </ul>
    );
  } else if (booksStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div className="">
      {content}
      <hr className="m-5" />
      <div className="container">
        <Form />
      </div>
    </div>
  );
};

export default Books;
