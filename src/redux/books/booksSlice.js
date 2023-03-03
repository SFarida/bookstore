import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    itemId: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    itemId: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    itemId: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
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
            itemId: nanoid(),
            title,
            author,
            category: 'Default category',
          },
        };
      },
    },
    removeBook(state, action) {
      return state.filter((book) => book.itemId !== action.payload);
    },
  },
});

export const selectAllBooks = (state) => state.books;
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
