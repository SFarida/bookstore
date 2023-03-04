import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TnLAxf11BPU9VtDdTJ8P/books';

const initialState = {
  allBooks: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const getBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});

export const postBook = createAsyncThunk('books/addNewBook', async (book) => {
  const response = await axios.post(baseUrl, book);
  return response.data;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  const response = await axios.delete(`${baseUrl}/${bookId}`);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.allBooks.push(action.payload);
      },
      prepare(title, author) {
        return {
          payload: {
            item_id: nanoid(),
            title,
            author,
            category: 'Default category',
          },
        };
      },
    },
    removeBook(state, action) {
      return state.allBooks.filter((book) => book.itemId !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => (
        {
          ...state,
          status: 'loading',
        }
      ))
      .addCase(getBooks.rejected, (state, action) => (
        {
          ...state,
          status: 'failed',
          error: action.error.message,
        }
      ))
      .addCase(getBooks.fulfilled, (state, action) => {
        const arr = [];
        Object.keys(action.payload).forEach((elt) => {
          const book = action.payload[elt];
          const obj = {
            item_id: elt,
            title: book[0].title,
            author: book[0].author,
            category: book[0].category,
          };
          arr.push(obj);
        });
        return {
          ...state,
          allBooks: arr,
          status: 'succeeded',
        };
      })
      .addCase(postBook.fulfilled, (action) => action.payload)
      .addCase(deleteBook.fulfilled, (action) => action.payload);
  },
});

export const selectAllBooks = (state) => state.books.allBooks;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
