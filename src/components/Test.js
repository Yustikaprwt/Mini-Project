import {React, useEffect, useState} from "react";
import axios from "axios";

const Test = () => {


    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick")
            .then((response) => response.json())
            .then((product) => {
                setProducts(product);
            });
        };
    });

    return(
        <div>
            {products.map(item => <li>{item.brand}</li>)}

        </div>
        
    )
}

export default Test;