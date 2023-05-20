import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Router } from "@reach/router";

//Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import MyAccount from "./Pages/MyAccount";
import Index from "./Pages/Index";
import Checkout from "./Pages/Checkout";
import OrderConfirmation from "./Pages/OrderConfirmation";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminHome from "./Pages/Admin/AdminHome";
import CreateProduct from "./Pages/Admin/CreateProduct";
import UpdateProduct from "./Pages/Admin/UpdateProduct";


function App() {
  return (
    <main className="bg-light-2" style={{ height: '100vh', overflowY: 'auto'}}>
    
      <Router>
        <Index path="/"/>
        <Home path="/home" />
        <MyAccount path="my-account" />
        <SignIn path="sign-in"/>
        <Register path="register"/>
        <ProductDetails path="product-details/:productId"/>
        <Cart path="/cart" />
        <Checkout path="/checkout"/>
        <OrderConfirmation path="/order"/>



        {/* Admin Components */}
        <AdminLogin path="/admin_login"/>
        <AdminHome path="/admin_home"/>
        <CreateProduct path="/createProduct"/>
        <UpdateProduct path="/updateProduct/:id"/>
      </Router>
    </main>
  );
}

export default App;
