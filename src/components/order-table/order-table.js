import React from "react";
import { connect } from "react-redux";
import { addBook, deleteAllBooks, deleteBook } from "../../actions";
import "./order-table.css";

function OrderTable({ items, orderTotal, onIncrease, onDecrease, onDelete }) {
  return (
    <div className="container">
      <div className="table-responsive">
        <table id="order-table" className="mt-5 table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Count</th>
              <th scope="col">Total price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => {
              const { id, name, count, total } = item;
              return (
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{name}</td>
                  <td>{count}</td>
                  <td>${total}</td>
                  <td>
                    <button
                      onClick={() => onDecrease(id)}
                      className="btn btn-primary"
                    >
                      -
                    </button>
                    <button
                      onClick={() => onIncrease(id)}
                      className="btn btn-primary"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onDelete(id)}
                      className="btn btn-danger"
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4 style={{ float: "right" }}>Total: ${orderTotal}</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    orderTotal: state.orderTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (id) => dispatch(addBook(id)),
    onDecrease: (id) => dispatch(deleteBook(id)),
    onDelete: (id) => dispatch(deleteAllBooks(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
