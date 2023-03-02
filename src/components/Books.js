import { useSelector } from 'react-redux';
import { selectAllBooks } from '../redux/books/booksSlice';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector(selectAllBooks);

  return (
    <div className="">
      <ul className="ps-0">
        {
                    books.map((book) => (
                      <Book
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        category={book.category}
                        chapter={book.chapter}
                        progress={book.progress}
                      />
                    ))
                }
      </ul>
      <hr className="m-5" />
      <div className="container">
        <Form books={books} />
      </div>
    </div>
  );
};

export default Books;
