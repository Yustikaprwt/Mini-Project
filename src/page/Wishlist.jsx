import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppContext } from "../components/appContext";

const Wishlist = () => {

    const {favorites,addToFavorites,removeFromFavorites} = useAppContext();
    console.log("wishlist are", favorites);

    const favoritesCheker = (id) => {
        const boolean = favorites.some((product) => product.id === id);
        return boolean;
    };

    return(
        <div className="favorites">
            <div className="row" style={{display: "flex", flexDirection: "row", marginTop: "85px"}}>
                {favorites.map((product) => (
                    <div className="col d-flex flex-row-wrap justify-content-center ">
                        <div class="card text-center" key={product.id}>
                            <img src={product.api_featured_image} className="card-img-top" alt={product.title}/>
                            <p style={{color: "black"}}>{product.id}</p>
                                <div className="card-body">
                                    <div className="card-title mb-0 lead">
                                        <h5 style={{color: "black"}}>{product.brand}</h5>
                                        <p className="card-text" style={{color: "#5A5D60"}}>{product.name}</p>
                                        <p>${product.price}</p>
                                            {favoritesCheker(product.id) ?
                                            <button onClick={()=> removeFromFavorites(product.id)} className="btn btn-warning" style={{marginBottom: "20px"}}>Remove from Wishlist</button>
                                            : <button onClick={()=> addToFavorites(product)} className="btn btn-warning" style={{marginBottom: "20px"}}>Add To Wishlist</button>}
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
                >Your Wishlist is empty! 
                 </h2>
            </div>
        <Footer/>
    </div>
    );
};

export default Wishlist;