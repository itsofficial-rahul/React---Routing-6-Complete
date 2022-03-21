import logo from "./logo.svg";
import Home from "./Home";
import React from "react";

import Title from "./Title";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import "./App.css";
import Order_Summary from "./Order_Summary";
import PageNot from "./PageNot";
import Product from "./NestedRoute/Product";
import Fetuer from "./NestedRoute/Fetuer";
import New from "./NestedRoute/new";
import User from "./NestedRoute/User";
import UserDetail from "./NestedRoute/UserDetail";
import Admin from "./Admin";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <NavLink to="/">Home</NavLink> &nbsp;&nbsp;
        <NavLink to="/Aboute">Aboute</NavLink>&nbsp;&nbsp;
        <NavLink to="/Title">Title</NavLink>&nbsp;&nbsp;
        <NavLink to="/Product">Product</NavLink>&nbsp;&nbsp;
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="Aboute"
          element={
            <React.Suspense fallback="loading...">
              {" "}
              <lazyAbout />{" "}
            </React.Suspense>
          }
        ></Route>
        <Route path="Title" element={<Title />} />
        <Route path="Title" element={<Title />} />
        <Route path="Order_Summary" element={<Order_Summary />}></Route>
        <Route path="Product" element={<Product />}>
          <Route index element={<Fetuer />}></Route>
          <Route path="New" element={<New />}></Route>
          <Route path="Fetuer" element={<Fetuer />}></Route>
        </Route>
        <Route path="User" element={<User />}>
          <Route path=":UserId" element={<UserDetail />}></Route>
          <Route path="Admin" element={<Admin />}></Route>
        </Route>
        <Route path="*" element={<PageNot />}></Route>
      </Routes>
    </div>
  );
}

export default App;
