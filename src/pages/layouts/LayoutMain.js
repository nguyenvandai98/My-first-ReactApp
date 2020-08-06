import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar';
import '../../assets/css/main/elegant-icons.css';
import '../../assets/css/main/style.scss';
import '../../assets/css/main/nice-select.css';
import '../../assets/css/main/bootstrap.min.css';
import '../../assets/css/main/themify-icons.css';
import '../../assets/css/main/font-awesome.min.css';

export default ({ children }) => {

    console.log('render Main')

    return (
        <div className="user-page">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}
