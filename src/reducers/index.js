const initialState = {
  books: [],
  cartItems: [],
  orderTotal: 0,
  inStock: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        ...state,
        books: action.payload,
        inStock: action.payload.length,
      };

    case "ADD_BOOK":
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);

      const item = state.cartItems.find((cartItem) => cartItem.id === bookId);
      const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);

      let newItem;

      if (item) {
        newItem = {
          ...item,
          count: item.count + 1,
          total: item.total + book.price,
        };
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            newItem,
            ...state.cartItems.slice(itemIndex + 1),
          ],
          orderTotal: state.orderTotal + book.price,
        };
      } else {
        newItem = {
          id: book.id,
          name: book.name,
          count: 1,
          total: book.price,
        };
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          orderTotal: state.orderTotal + book.price,
        };
      }

    case "DELETE_BOOK":
      const bookIdDelete = action.payload;
      const bookDelete = state.books.find((book) => book.id === bookIdDelete);

      const itemDelete = state.cartItems.find(
        (cartItem) => cartItem.id === bookIdDelete
      );

      const itemIndexDelete = state.cartItems.findIndex(
        ({ id }) => id === bookIdDelete
      );

      if (itemDelete.count === 1) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndexDelete),
            ...state.cartItems.slice(itemIndexDelete + 1),
          ],
          orderTotal: state.orderTotal - bookDelete.price,
        };
      }

      let newItemForDelete = {
        ...itemDelete,
        count: itemDelete.count - 1,
        total: itemDelete.total - bookDelete.price,
      };
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, itemIndexDelete),
          newItemForDelete,
          ...state.cartItems.slice(itemIndexDelete + 1),
        ],
        orderTotal: state.orderTotal - bookDelete.price,
      };

    case "DELETE_ALL_BOOKS":
      const bookItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload
      );
      const bookIndexForRemove = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, bookIndexForRemove),
          ...state.cartItems.slice(bookIndexForRemove + 1),
        ],
        orderTotal: state.orderTotal - bookItem.total,
      };

    default:
      return state;
  }
};

export default reducer;
