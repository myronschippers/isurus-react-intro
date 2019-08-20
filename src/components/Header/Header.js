import React, { Component } from 'react';
import logo from './logo.svg';
import ReactLink from '../ReactLink/ReactLink';
import './Header.css';

class Header extends Component {

    render() {
        const imgClasses = 'App-logo';

        return (
            <header className="App-header">
                <img src={logo} className={imgClasses} alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <ReactLink />
            </header>
        );
    }

}

export default Header;