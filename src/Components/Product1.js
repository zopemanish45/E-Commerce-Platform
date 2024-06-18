import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useCart } from 'react-use-cart'
import toast, {Toaster} from 'react-hot-toast'
// import Counter from './Counter';


const Product1 = () => {

    const { id } = useParams();
    const [Product1, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const { addItem } = useCart();

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            // await console.log(response.json())

            setLoading(false);

        }
        getProducts();


    }, []);

    useEffect(() => {
        console.log(Product1)
    }, [Product1])

    const handleAdd = (product) => {
        addItem(product)
        toast.success("Item added...")
    }
    

    const Loading = () => {
        return (
            <>
               <div className='col-md-6'>
                <Skeleton height={400}/>
               </div>

               <div className='col-md-6' style={{lineHeight:2}}>
                <Skeleton height={50} width={300}/>
                <Skeleton height={75}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50}/>
                <Skeleton height={150}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50} width={100} style={{marginLeft:6}}/>
               </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img src={Product1.image} alt={Product1.title} height="400px" width="400px" />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>
                        {Product1.category} </h4>
                    <h1 className='display-5'>{Product1.title}</h1>
                    <p className='lead fw-bolder'>
                        Rating{Product1.rating && Product1.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>${Product1.price}</h3>

                    {/* <h3 className='display-6 fw-bold my-4'>{Product1.item}</h3>   */}
                    {/* <Counter/> */}
                    <p className='lead'>{Product1.description}</p>
                    <button onClick={() =>  handleAdd(Product1)} className='btn btn-outline-dark px-4 py-2'>Add to cart</button>
                    {/* <NavLink to="/cart" className='btn btn-outline-dark ms-2 px-3'>Go to cart</NavLink> */}


                </div>
            </>
        )
    }
    return (
        <>
        <Toaster position="top-center"/>
        <div>
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading ? <Loading /> : <ShowProduct />}

                </div>

            </div>

        </div>
        </>
    );
}

export default Product1
