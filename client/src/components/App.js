import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProductPage from './views/UploadProductPage/UploadProductPage';
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            <NavBar />
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
                <Routes>
                    <Route exact path="/" element={Auth(LandingPage, null)} />
                    <Route exact path="/login" element={Auth(LoginPage, false)} />
                    <Route exact path="/register" element={Auth(RegisterPage, false)} />
                    <Route exact path="/product/upload" element={Auth(UploadProductPage, true)} />
                    <Route exact path="/product/:productId" element={Auth(DetailProductPage, null)} />
                    <Route exact path="/user/cart" element={Auth(CartPage, true)} />
                </Routes>
              </div>
            <Footer />
        </Suspense>
    );
}

export default App;
