import React from 'react';
// import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import heart from '../images/heart.jpg';
function Filter() {
    const [loading, setloading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        setloading(true);
        axios(
            {
                method: "GET",
                url: "https://fakestoreapi.com/products"
            }
            
        ).then(res => {
            console.log(res.data)
            setData(res.data)
        }).catch(e => console.log(e))
            .finally(() => setloading(false));
    }, [])
    return (
        <div className='container'>
            <div class="aem-Grid  aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--4">
                    <p>Filters</p>
                    <hr />
                    <p>Attribute</p>
                    <input type="checkbox" />
                    <label for="vehicle1"> option</label><br />
                    <input type="checkbox" />
                    <label for="vehicle2"> option</label><br />
                    <input type="checkbox"/>
                    <label for="vehicle3"> option</label><br />
                    <input type="checkbox" />
                    <label for="vehicle3"> option</label><br />

                    <u>show more</u>
                    <hr />
                    <p>Attributes</p>
                    <input type="checkbox" />
                    <label for="vehicle1"> option</label><br />
                    <input type="checkbox" />
                    <label for="vehicle2"> option</label><br />
                    <input type="checkbox"/>
                    <label for="vehicle3"> option</label><br />
                    <input type="checkbox"  />
                    <label for="vehicle3"> option</label><br />
                    <input type="checkbox" />
                    <label for="vehicle1"> option</label><br />
                    <input type="checkbox" />
                    <label for="vehicle2"> option</label><br />
                    <input type="checkbox"  />
                    <label for="vehicle3"> option</label><br />
                    <input type="checkbox"  />
                    <label for="vehicle3"> option</label><br />
                    <hr />
                    <div>
                        <p>Colours</p>
                        <div class="colors">
                            <div class="square"></div><br />
                            <div class="square1"></div><br />
                            <div class="square2"></div><br />
                            <div class="square3"></div><br />
                        </div>
                        
                        <div class="colors1">
                            <div class="square5"></div><br />
                            <div class="square6"></div><br />
                            <div class="square7"></div><br />
                            <div class="square8"></div>
                        </div>
                        <div class="colors2">
                            <div class="square9"></div><br />
                            <div class="square10"></div><br />
                            <div class="square11"></div><br />
                        </div>
                    </div>
                    <hr />
                    <p>Attributes</p>
                    <input type="checkbox" />
                    <label for="vehicle1"> option</label><br />
                    <input type="checkbox"  />
                    <label for="vehicle2"> option</label><br />
                    <input type="checkbox"  />
                    <label for="vehicle3"> option</label><br />
                    <input type="checkbox"  />
                    <label for="vehicle3"> option</label><br />
                    <input type="checkbox"  />
                    <label for="vehicle1"> option</label><br />
                    <input type="checkbox"  />
                    <label for="vehicle2"> option</label><br />
                    <input type="checkbox" />
                    <label for="vehicle3"> option</label><br />
                    <input type="checkbox" />
                    <label for="vehicle3"> option</label><br />
                </div>

                <div class="aem-GridColumn aem-GridColumn--default--8">
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
                                    <img src={heart} class="heart-1"></img>
                                </div>
                            </div>

                        ))}

                    </div>

                </div>

            </div>
        </div>
        
    )
}
export default Filter;