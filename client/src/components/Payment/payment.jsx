import "./payment.scss";
import { useContext } from "react";
import { Context } from "../../utils/context";

const Payment = () => {
    const {cartSubTotal} = useContext(Context);
    return(
        <>
        <div>
            <h1>{cartSubTotal}</h1>
        </div>
        </>
    );
};


export default Payment;
