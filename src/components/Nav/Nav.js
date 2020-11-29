import React, {useState, useEffect} from 'react';
import './Nav.css';

function Nav() {
    const  [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <nav className={`nav ${show && "nav--black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/800px-Logonfx.png" alt=""/>
            <img className="nav__avatar" src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/>
        </nav>
    )
}

export default Nav;