import "./Product.scss";
import {useNavigate} from "react-router-dom";

const Product = ({id,data}) => {
    const navigate = useNavigate();
    return(
        <div className="product-card"
        onClick={()=>navigate("/product/"+id)}>
            <div className="thumbnail">
                <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">
                    {data.title}
                </span>
                <span className="price">
                    PKR-/ {data.price}
                </span>
            </div>
        </div>
    );
};

export default Product;