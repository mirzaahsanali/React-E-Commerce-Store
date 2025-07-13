import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect} from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Payment from "./components/Payment/payment";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Success from "./components/Success/success";

function App() {
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])
    return (
        <BrowserRouter>
            {
                loading ? <LoadingScreen loading={loading}/>:
                <AppContext>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:id" element={<Category />} />
                        <Route path="/product/:id" element={<SingleProduct />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/success" element={<Success />} />
                    </Routes>
                    <Newsletter />
                    <Footer />
                </AppContext>
            }
        </BrowserRouter>
    );
}

export default App;
