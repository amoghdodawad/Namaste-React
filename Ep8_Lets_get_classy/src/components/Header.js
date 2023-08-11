import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    const [btnName,setBtnName] = useState('Login');
    useEffect(()=>{
        console.log('useEffect called Header.js');
    },[btnName])
    return (
        <div className='header'>
            {console.log('Header re-rendered')}
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <li><button className="login" onClick={()=>{btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;