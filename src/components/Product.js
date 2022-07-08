import React from 'react';
import { useState, useEffect } from 'react';

function Product() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);
    return (
        <div className="product-container">
            {loading && (<div>
                {" "}
                <h1>loading</h1>
            </div>)}
            {data.map((product) => (
                <div key={product.id} className="card">
                    <div><img src={product.image} alt="name" />
                    </div>

                    <div className="card-description">
                        <h6>{product.title}</h6>
                        <h6>{`price:${product.price}`}</h6>
                        {/* <img src={heart} class="heart-1"></img> */}
                    </div>
                </div>

            ))}

        </div>
    )
}
export default Product()