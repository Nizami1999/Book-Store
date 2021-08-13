import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import Header from "../header/header";

const App = () => {
  return (
    <>
      <Header logo="Book Store" />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/cart" exact component={CartPage}></Route>
      </Switch>
    </>
  );
};

export default App;
