import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  book: [],
  bookById: [],
  deleteBook: [],
  updateBook: [],
  allBooks: [],
  loading: false,
  errorSearch: null,
};

const bookManageSlice = createSlice({
  name: "bookDetail",
  initialState,
  reducers: {
    userSearchRequest: (state) => {
      state.loading = true;
      state.errorSearch = null;
    },
    createBookSuccess: (state, action) => {
      state.loading = false;
      state.book = action.payload;
    },
    getBookSuccess: (state, action) => {
      state.loading = false;
      state.allBooks = action.payload;
    },
    getBookByIdSuccess: (state, action) => {
      state.loading = false;
      state.bookById = action.payload;
    },
    deleteBookSuccess: (state, action) => {
      state.loading = false;
      state.deleteBook = action.payload;
    },
    updateBookSuccess: (state, action) => {
      state.loading = false;
      state.updateBook = action.payload;
    },
    userSearchFailure: (state, action) => {
      state.loading = false;
      state.errorSearch = action.payload;
    },
    resetUserSearchState: (state) => {
      state.book = [];
      state.errorSearch = null;
      state.loading = false;
    },
  },
});

export const {
  userSearchRequest,
  createBookSuccess,
  getBookSuccess,
  getBookByIdSuccess,
  deleteBookSuccess,
  updateBookSuccess,
  userSearchFailure,
  resetUserSearchState,
} = bookManageSlice.actions;

export const createBook = (bookData) => async (dispatch) => {
  dispatch(userSearchRequest());

  try {
    const response = await axios.post(
      `http://localhost:5000/Book/createBook`,
      {
        title: bookData.title,
        author: bookData.author,
        description: bookData.description,
        no_Of_Pages: bookData.no_Of_Pages,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(createBookSuccess(response.data));
  } catch (errorSearch) {
    const errorMessage =
      errorSearch.response && errorSearch.response.data
        ? errorSearch.response.data.message
        : errorSearch.message;
    dispatch(userSearchFailure(errorMessage));
    console.log("errorSearch:", errorMessage);
  }
};
export const getBooks = () => async (dispatch) => {
  dispatch(userSearchRequest());

  try {
    const response = await axios.get(
      `http://localhost:5000/Book/getBooks`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(getBookSuccess(response.data));
  } catch (errorSearch) {
    const errorMessage =
      errorSearch.response && errorSearch.response.data
        ? errorSearch.response.data.message
        : errorSearch.message;
    dispatch(userSearchFailure(errorMessage));
    console.log("errorSearch:", errorMessage);
  }
};
export const deleteBooks = (id) => async (dispatch) => {
  dispatch(userSearchRequest());

  try {
    const response = await axios.post(
      `http://localhost:5000/Book/deleteBook/${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(deleteBookSuccess(response.data));
  } catch (errorSearch) {
    const errorMessage =
      errorSearch.response && errorSearch.response.data
        ? errorSearch.response.data.message
        : errorSearch.message;
    dispatch(userSearchFailure(errorMessage));
    console.log("errorSearch:", errorMessage);
  }
};
export const updateBooks = (id, bookData) => async (dispatch) => {
  dispatch(userSearchRequest());
  console.log(bookData.title);
  try {
    const response = await axios.post(
      `http://localhost:5000/Book/updateBook/${id}`,
      {
        title: bookData.title,
        author: bookData.author,
        description: bookData.description,
        no_Of_Pages: bookData.no_Of_Pages,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(updateBookSuccess(response.data));
  } catch (errorSearch) {
    const errorMessage =
      errorSearch.response && errorSearch.response.data
        ? errorSearch.response.data.message
        : errorSearch.message;
    dispatch(userSearchFailure(errorMessage));
    console.log("errorSearch:", errorMessage);
  }
};

export const getBookById = (id) => async (dispatch) => {
  dispatch(userSearchRequest());

  try {
    const response = await axios.get(
      `http://localhost:5000/Book/getBookById/${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(getBookByIdSuccess(response.data));
  } catch (errorSearch) {
    const errorMessage =
      errorSearch.response && errorSearch.response.data
        ? errorSearch.response.data.message
        : errorSearch.message;
    dispatch(userSearchFailure(errorMessage));
    console.log("errorSearch:", errorMessage);
  }
};

export default bookManageSlice.reducer;
