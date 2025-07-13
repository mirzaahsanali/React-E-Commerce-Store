import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import {useNavigate} from "react-router-dom";


const Banner = () => {
    const navigate = useNavigate();
    return(
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1 className="v2">Our Latest Launch</h1>
                    <h1>SCRUNCHIES</h1>
                    <h2>Out Now</h2>
                    <p>
                    This stylish hair accessory features a durable elastic band that can be stretched and wrapped around to fit various hair thickness
                    </p>
                    <div className="ctas">
                        <a href="#" className="banner-cta" onClick={()=>navigate("/category/"+3)}>Shop Now</a>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="Scrunchie Image" />
            </div>
        </div>
    );
};

export default Banner;