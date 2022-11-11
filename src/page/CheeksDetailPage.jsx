import { React, useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { GiPriceTag } from 'react-icons/gi'
import {NavLink } from "react-router-dom";

const CheeksDetailPage = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush");
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
                            filterProduct("nyx")} className="btn btn-outline-secondary btn-sm">nyx
                        </button>
                        <button onClick={() => 
                            filterProduct("clinique")} className="btn btn-outline-secondary btn-sm">clinique
                        </button>
                        <button onClick={() => 
                            filterProduct("covergirl")} className="btn btn-outline-secondary btn-sm">covergirl
                        </button>
                        <button onClick={() => 
                            filterProduct("physicians formula")} className="btn btn-outline-secondary btn-sm">physicians formula
                        </button>
                        <button onClick={() => 
                            filterProduct("dior")} className="btn btn-outline-secondary btn-sm">dior
                        </button>
                        <button onClick={() => 
                            filterProduct("e.l.f.")} className="btn btn-outline-secondary btn-sm">e.l.f.
                        </button>
                        <button onClick={() => 
                            filterProduct("smashbox")} className="btn btn-outline-secondary btn-sm">smashbox
                        </button>
                        <button onClick={() => 
                            filterProduct("revlon")} className="btn btn-outline-secondary btn-sm">revlon
                        </button>
                        <button onClick={() => 
                            filterProduct("maybelline")} className="btn btn-outline-secondary btn-sm">maybelline
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
                                        <div className="card-title mb-0 lead">
                                            <h5 style={{color: "black"}}>{product.brand}</h5>
                                            <p className="card-text" style={{color: "#5A5D60"}}>{product.name}</p>
                                            <p><GiPriceTag/> $ {product.price}</p>
                                            <NavLink to={`/Detail/Cheeks/Product/${product.id}`} className="btn btn-primary" style={{marginBottom: "20px"}}>Check Detail</NavLink>
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
        <hr/>
            <div className="loading">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
            <Footer/>
        </>
    );
};

export default CheeksDetailPage;

