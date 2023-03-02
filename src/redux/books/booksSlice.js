import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
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

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, author) {
        return {
          payload: {
            id: nanoid(),
            title,
            author,
          },
        };
      },
    },
    removeBook(state, action) {
      const bookId = action.payload;
      const existingBook = state.find((book) => book.id === bookId);
      state.filter((book) => book.id !== existingBook.id);
    },
  },
});

export const selectAllBooks = (state) => state.books;
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
