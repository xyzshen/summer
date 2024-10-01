import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import News from "./pages/News";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Layout from "./components/Layout/Layout.js";

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home></Home>} />
                    <Route path="products" element={<Products></Products>} />
                    <Route path="about" element={<About></About>} />
                    <Route path="news" element={<News></News>} />
                    <Route path="join" element={<Join></Join>} />
                    <Route path="contact" element={<Contact></Contact>} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
