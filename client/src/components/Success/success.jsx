import "./success.scss";
import ImageSlider from "./Slider/slider";

const Success = () => {
    return(
        <>
        <div className="success-main">
            <div className="upper">
                <div className="img-box">
                    <ImageSlider/>
                </div>
            </div>
            <div className="lower">
                <h1>Congratulations! Your Order has been placed</h1>
                <h3>Your order will be processed within 1-2 business days and shipped within 4-5 business days. Contact us for furthur details</h3>
            </div>
        </div>
        </>
    )
}

export default Success;