import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import { useCart } from 'react-use-cart';
import toast, {Toaster} from 'react-hot-toast'

import Counter from './Counter';
//  import Product from './product';
// import Product from './product';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;

            }

        }
        getProducts();
    }, []);


    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>

                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>

                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const handleAdd = (product) => {
        addItem(product)
        toast.success("Item added...")
    }

    const { addItem } = useCart();
    const ShowProducts = () => {

        return (
            <>
               
                <div className='buttons d-flex justify-content-center m-1 p-1'>
                    <button className=' button btn btn-outline-dark m-1' onClick={() => setFilter(data)}>ALL</button>
                    <button className=' button btn btn-outline-dark m-1' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className=' button btn btn-outline-dark m-1' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className=' button btn btn-outline-dark m-1' onClick={() => filterProduct("jewelery")}>Jwelery</button>
                    <button className=' button btn btn-outline-dark m-1' onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>

                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div class="card h-100 text-center" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p class="card-text lead fw-bold">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-warning px-2 py-1 ">
                                            Know More</NavLink><br />
                                        {/* <NavLink to={`/products/${product.id}`} class="btn btn-outline-success" onClick={() => addItem(product)}><button>
                                            Add To Cart </button></NavLink> */}
                                        <button onClick={() => handleAdd(product)} className='btn btn-outline-dark mt-1 px-2 py-1'>Add to cart</button>


                                    </div>
                                </div>
                            </div>
                            {/* 
<button></button> */}
                        </>
                    );
                })}
            </>
        )

    }
    return (
        <>
            <Toaster position="top-center"/>
        <div>
            <div className="container m-6 p-5">
                <div className="row">
                    <div className='col-12 mb-5'>
                        <h3 className='display-6 fw-bolder text-center'>Latest Products</h3>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
        </>
    )
}

export default Products