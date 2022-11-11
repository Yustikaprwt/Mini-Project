import { React, useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs"
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../components/appContext";
import axios from "axios";

const EyesDetailProduct = () => {

    const navigate = useNavigate();
    const EyesDetailPage = () => {
        navigate(`/Eyes/Detail`);
    }

const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const {favorites,addToFavorites,removeFromFavorites} = useAppContext();
    console.log("favorite are", favorites);

    const favoritesCheker = (id) => {
        const boolean = favorites.some((product) => product.id === id);
        return boolean;
    }

  useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        const result = await axios(
        "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow"
      );

        const productDetail = result.data.find(
        (array) => array.id === Number(id)
        );

            setProduct(productDetail);
            setLoading(false);
            };

            fetchData();
        }, []);

        <Loading/>

        const ShowProduct = () => {
            return (
            <>
                <div className="col-md-6">
                        <img src={product.api_featured_image} alt={product.category}
                        style={{height: "400px", width: "300px", marginTop: "20%"}}
                        />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5" style={{
                        marginTop: "20%" 
                        }}>
                        {product.name}
                    </h1>
                    <h5>Brand: {product.brand} </h5>
                    <h5>Category: {product.category} </h5>
                    <p className="lead">$ {product.price} </p>
                    <a href={product.product_link} className="lead" style={{textDecoration: "none"}}> {product.product_link} </a>
                    <p className="lead"> {product.description} </p>

                    {favoritesCheker(product.id) ?
                    <button onClick={()=> removeFromFavorites(product.id)} className="btn btn-warning" style={{marginBottom: "20px"}}>Remove from Wishlist <BsFillBookmarkHeartFill/> </button>
                    : <button onClick={()=> addToFavorites(product)} className="btn btn-warning" style={{marginBottom: "20px"}}>Add To Wishlist <BsBookmarkHeart/> </button>}

                    <br/>
                    
                    <button onClick={EyesDetailPage} className="btn btn-secondary" style={{
                        width: "135px", marginBottom: "120px"}}>
                            Back
                    </button>
                </div>
            </>
        );
    };

    return (
        <>
        <Navbar/>

    <div className="container">
        <div className="row">
            {loading ? <Loading /> : 
            <ShowProduct />}
            </div>
                </div>
                    <Footer/>
                        </>
  );
};

export default EyesDetailProduct;