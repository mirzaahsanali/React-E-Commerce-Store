import{useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

import{TbSearch} from "react-icons/tb";
import{CgShoppingCart} from "react-icons/cg";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import logo from "../../assets/logo.jpg";
import {Context} from "../../utils/context";

import "./Header.scss";

const Header = () => {
    
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset>200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    } , []);

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : "" }`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                    </ul>
                    <div className="center">
                        <a href="/">
                        <img  className="logo" src={logo} alt="Zeesh Logo" />
                        </a>
                    </div>
                    <div className="right">
                        <TbSearch onClick={()=> setShowSearch
                        (true)}/>
                        <span className="cart-icon" onClick={()=> setShowCart
                        (true)}>
                            <CgShoppingCart/>
                            {!!cartCount && 
                            <span>{cartCount}</span>
                            }
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart}/>}
            {showSearch && <Search setShowSearch={setShowSearch}/>}
        </>
    );
};

export default Header;

