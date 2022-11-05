import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppContext } from "../components/appContext";

const Cart = () => {

    const {cart,addToCart,removeFromCart} = useAppContext();
    console.log("cart are", cart);

    const cartCheker = (id) => {
        const boolean = cart.some((product) => product.id === id);
        return boolean;
    };

    return(
        <div className="cart">
            <div className="row" style={{display: "flex", flexDirection: "row", marginTop: "85px"}}>
                {cart.map((product) => (
                    <div className="col d-flex flex-row-wrap justify-content-center ">
                        <div class="card text-center" key={product.id}>
                            <img src={product.api_featured_image} className="card-img-top" alt={product.title}/>
                            <p style={{color: "black"}}>{product.id}</p>
                                <div className="card-body">
                                    <div className="card-title mb-0 lead fw-bold">
                                        <h5 style={{color: "black"}}>{product.brand}</h5>
                                        <h4 className="card-text" style={{color: "#5A5D60"}}>{product.name}</h4>
                                        <p>${product.price}</p>
                                            {cartCheker(product.id) ?
                                            <button onClick={()=> removeFromCart(product.id)} className="btn btn-warning" style={{marginBottom: "20px"}}>Remove from Cart</button>
                                            : <button onClick={()=> addToCart(product)} className="btn btn-warning" style={{marginBottom: "20px"}}>Add To Cart</button>}
                                            <br/>

                                            <button className="btn btn-primary" onClick={()=> addToCart(product)}
                                            > + </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                ))};
            </div>
        <Navbar/>

            <div style={{
                marginTop: "100px"}}>
                <h2 className="text-center" style={{
                    color: "#7D8D9C"}}
                >Your Cart is empty! 
                 </h2>
            </div>
        <Footer/>
    </div>
    );
};

export default Cart;