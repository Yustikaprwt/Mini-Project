import { React, useState, useEffect }from "react";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GiPriceTag } from 'react-icons/gi'
import makeUp1 from "../asset/Makeup1.jpg";
import makeUp2 from "../asset/Makeup2.jpg";
import makeUp3 from "../asset/Makeup3.jpg";
import makeUp4 from "../asset/Makeup4.jpg";
import "../css/Recommendation.css";

const Recommendation = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(
                "https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lip_gloss&product_type=lipstick"
                );

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

    return(
        <>
            <Navbar/>
                <Carousel>
                    <Carousel.Item interval={500}>
                        <img 
                            className="d-block w-100 d-flex justify-content-center" 
                            style={{height: "500px"}} 
                            src={makeUp1} 
                            alt="carousel-image"/>
                        <Carousel.Caption>
                            <h5 className="carousel-title">Found Your Beauty In Here</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                       
                    <Carousel.Item interval={500}>
                        <img 
                            className="d-block w-100 d-flex justify-content-center" 
                            style={{height: "500px"}} 
                            src={makeUp2} 
                            alt="carousel-image"/>
                        <Carousel.Caption>
                            <h5 className="carousel-title">And Everything You Need</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                       
                    <Carousel.Item interval={500}>
                        <img 
                            className="d-block w-100 d-flex justify-content-center" 
                            style={{height: "500px"}} 
                            src={makeUp3} 
                            alt="carousel-image"/>
                        <Carousel.Caption>
                            <h5 className="carousel-title">We Have Everything</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                        
                    <Carousel.Item interval={500}>
                        <img 
                            className="d-block w-100 d-flex justify-content-center" 
                            style={{height: "500px"}} 
                            src={makeUp4} 
                            alt="carousel-image"/>
                        <Carousel.Caption>
                            <h5 className="carousel-title">Just In BEAUTYOU</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
                    <h3 className="recommendation-title">
                        <strong>Welcome to the Recommendation Page!</strong>
                            <style>@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');</style>
                    </h3>
                        <hr/>
                            <div className="row" style={{display: "flex", flexDirection: "row"}}>
                                {filter.map((product) => (
                                    <div className="col d-flex flex-row-wrap justify-content-center ">
                                            <div class="card card-detail text-center" key={product.id}>
                                                <img src={product.api_featured_image} className="card-img-top" alt={product.title}/>
                                                <p style={{color: "black"}}>{product.id}</p>
                                                    <div className="card-body">
                                                        <div className="card-title mb-0 lead">
                                                            <h5 style={{color: "black"}}>{product.brand}</h5>
                                                            <p className="card-text" style={{color: "#5A5D60"}}>{product.name}</p>
                                                            <p><GiPriceTag/> $ {product.price}</p>
                                                            <NavLink to={`/Detail/Recommendation/${product.id}`} className="btn btn-primary" style={{marginBottom: "20px"}}>Check Detail</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))};
                                    </div>
                            <Footer/>
            </>
        );
    };

export default Recommendation;