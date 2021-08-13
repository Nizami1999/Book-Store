import React from "react";
import { connect } from "react-redux";
import { addBook, booksLoaded } from "../../actions";
import BookListItem from "../../components/book-list-item";
import withBookstoreService from "../hoc/";

class BookList extends React.Component {
  componentDidMount() {
    const { bookstoreService, loadBooks } = this.props;
    loadBooks(bookstoreService.getBooks());
  }

  render() {
    const { books, onAddedToCart } = this.props;

    return (
      <div id="bookList">
        <div className="container">
          {books.map((book) => {
            return (
              <BookListItem
                key={book.id}
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: (books) => dispatch(booksLoaded(books)),
    onAddedToCart: (id) => dispatch(addBook(id)),
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
