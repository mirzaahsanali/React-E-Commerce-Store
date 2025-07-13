import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import playstore from "../../assets/play.jpg";
import appstore from "../../assets/app.jpg";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        ZEESH: Empowering Pakistani Women's Style. Our brand celebrates the essence of modern Pakistani women through thoughtfully crafted clothing that merges tradition with contemporary fashion, inspiring confidence and individuality.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Outlets Launching Soon
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +92 303 7094963</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: buyzeesh@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text" onClick={()=>navigate('/category/'+1)}>Dresses</span>
                    <span className="text" onClick={()=>navigate('/category/'+2)}>Baby Frocks</span>
                    <span className="text" onClick={()=>navigate('/category/'+3)}>Scrunchies</span>
                    <span className="text" onClick={()=>navigate('/category/'+4)}>Coushions</span>
                </div>
                <div className="col">
                    <div className="title">Download App</div>
                    <img className="app" src={playstore} alt="playstore" />
                    <img className="app" src={appstore} alt="appstore" />
                    <p>Both Launching Soon</p>
                </div>
                <div className="col">
                    <div className="title">Payment</div>
                    <img className="payment" src={Payment} />
                    <p>Contact and Order on Whatsapp/Instagram for JazzCash/Sadapay or other payment methods</p>
                    <p>(right now no payment gateway working)</p>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    ©Copyright - 2023 - All rights are reserved to ZEESH
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
