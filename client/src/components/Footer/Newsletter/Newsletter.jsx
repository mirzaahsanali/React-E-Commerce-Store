import React from "react";
import {FaFacebookF,FaInstagram} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input id="email" type="text" placeholder="Email Address" />
                    <button id="subscribe" onClick={()=>alert("Congratulations! " + document.querySelector('#email').value+" has been Subscribed")}>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <a target="_blank" href="https://www.instagram.com/zeesh.clothing">
                            <FaFacebookF size={14} />
                        </a>
                        
                    </div>
                    <div className="icon">
                        <a target="_blank" href="https://www.instagram.com/zeesh.clothing">
                            <FaInstagram size={14} />
                        </a>
                        
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
