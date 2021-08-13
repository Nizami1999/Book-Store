import React from "react";
import BookList from "../../components/book-list";
import OrderTable from "../order-table/order-table";

function HomePage() {
  return (
    <>
      <BookList />
      <OrderTable />
    </>
  );
}

export default HomePage;
