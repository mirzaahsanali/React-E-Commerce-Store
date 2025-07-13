import "./LoadingScreen.scss";

import logo from "../../assets/logo.jpg";

const LoadingScreen = () => {
    return(
        <div className="main">
            <div className="content">
                <div className="img">
                    <img src={logo} alt="" />
                </div>
                <div className="text">Empowering Pakistani Women's Style.</div>
            </div>
        </div>
    );
};

export default LoadingScreen;