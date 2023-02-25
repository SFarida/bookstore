import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      category: 'Action',
      author: 'Suzanne Collins',
      chapter: 'Chapter 17',
      progress: 64,
    },
    {
      id: 2,
      title: 'Dune',
      category: 'Science Fiction',
      author: 'Frank Herbert',
      chapter: 'Chapter 3: *A Lesson Learned',
      progress: 8,
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      category: 'Economy',
      author: 'Suzanne Collins',
      chapter: 'Introduction',
      progress: 0,
    },
  ];

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
