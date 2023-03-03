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
                        key={book.itemId}
                        title={book.title}
                        author={book.author}
                        category={book.category}
                        itemId={book.itemId}
                      />
                    ))
                }
      </ul>
      <hr className="m-5" />
      <div className="container">
        <Form />
      </div>
    </div>
  );
};

export default Books;
