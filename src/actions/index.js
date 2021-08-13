export const booksLoaded = (newBooks) => {
  return { type: "BOOKS_LOADED", payload: newBooks };
};
export const addBook = (book) => {
  return { type: "ADD_BOOK", payload: book };
};

export const deleteAllBooks = (book) => {
  return { type: "DELETE_ALL_BOOKS", payload: book };
};

export const deleteBook = (book) => {
  return { type: "DELETE_BOOK", payload: book };
};
