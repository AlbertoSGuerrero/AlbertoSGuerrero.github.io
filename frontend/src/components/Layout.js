import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;