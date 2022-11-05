import { React, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { NavLink} from "react-router-dom";
import "../css/LipsDetailPage.css";

const LipsDetailPage = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return() => {
                componentMounted = false;
            }
        }
        getProducts();
        }, []);

            <Loading/>

            const filterProduct = (brandName) => {
                const updatedList = data.filter((e)=>e.brand === brandName);
                setFilter(updatedList);
            }

            const ShowProducts = () => {
                return ( 
                    <>
                    <div className="button d-flex justify-content-center p-2" style={{marginTop: "70px"}}>
                        <button onClick={() => 
                            setFilter(data)} className="btn btn-outline-secondary btn-sm">All
                        </button>
                        <button onClick={() => 
                            filterProduct("colourpop")} className="btn btn-outline-secondary btn-sm">colourpop
                        </button>
                        <button onClick={() => 
                            filterProduct("boosh")} className="btn btn-outline-secondary btn-sm">boosh
                        </button>
                        <button onClick={() => 
                            filterProduct("nyx")} className="btn btn-outline-secondary btn-sm">nyx
                        </button>
                        <button onClick={() => 
                            filterProduct("clinique")} className="btn btn-outline-secondary btn-sm">clinique
                        </button>
                        <button onClick={() => 
                            filterProduct("dior")} className="btn btn-outline-secondary btn-sm">dior
                        </button>
                        <button onClick={() => 
                            filterProduct("smashbox")} className="btn btn-outline-secondary btn-sm">smashbox
                        </button>
                        <button onClick={() => 
                            filterProduct("benefit")} className="btn btn-outline-secondary btn-sm">benefit
                        </button>
                        <button onClick={() => 
                            filterProduct("revlon")} className="btn btn-outline-secondary btn-sm">revlon
                        </button>
                        <button onClick={() => 
                            filterProduct("maybelline")} className="btn btn-outline-secondary btn-sm">maybelline
                        </button>
                        <button onClick={() => 
                            filterProduct("marienatie")} className="btn btn-outline-secondary btn-sm">marienatie
                        </button>
                    </div>
                <hr/>

                        <div className="row" style={{display: "flex", flexDirection: "row"}}>
                        {filter.map((product) => (
                            <div className="col d-flex flex-row-wrap justify-content-center ">
                                <div class="card text-center" key={product.id}>
                                    <img src={product.api_featured_image} className="card-img-top" alt={product.title}/>
                                    <p style={{color: "black"}}>{product.id}</p>
                                    <div className="card-body">
                                        <div className="card-title mb-0 lead fw-bold">
                                            <h5 style={{color: "black"}}>{product.brand}</h5>
                                            <h4 className="card-text" style={{color: "#5A5D60"}}>{product.name}</h4>
                                            <p>${product.price}</p>
                                            <NavLink to={`/Detail/Lips/Product/${product.id}`} className="btn btn-primary" style={{marginBottom: "20px"}}>Check Detail</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))};
                        </div>
                    </>
                );
            };

    return (
       <>
       <Navbar/>
                <div className="loading">
                    {loading ? <Loading/> : <ShowProducts/>}
                </div>
            <Footer/>
        </>
    );
};

export default LipsDetailPage;