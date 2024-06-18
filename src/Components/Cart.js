import React from 'react'
import { useCart } from 'react-use-cart';
import toast, { Toaster} from 'react-hot-toast';

const Cart = () => {

    const { removeItem, updateItemQuantity, items, totalItems, totalUniqueItems, cartTotal, } = useCart();
    console.log(items)

    return (
        <>
        <Toaster/>
            <div className='container'>
                <h1>cart</h1>
                <table className='table table-stripe hover'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>

                            <th>Quantity</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            items.map((cval) => {
                                return (

                                    <tr>
                                        <td>{cval.id}</td>
                                        <td><img src={cval.image} height={'100'} width={'100'} /></td>
                                        <td>{cval.title}</td>
                                        <td>{cval.price}</td>
                                        {/* <td>{cval.actions}</td> */}

                                        {/* <td>Quantity:{items.quantity}</td> */}

                                        <td className='flex justify-center'>
                                            <button className="btn btn-dark text-center" onClick={() => updateItemQuantity(cval.id, cval.quantity + 1)}>+</button>
                                            <span className='m-3'>{cval.quantity}</span>
                                            <button className="btn btn-dark text-center" onClick={() => updateItemQuantity(cval.id, cval.quantity - 1)}>-</button>
                                        </td>

                                        {/* <td className='text-center'> <button className="btn btn-dark text-center" onClick={() => updateItemQuantity(cval.id, cval.quantity + 1)}>+</button></td>
                                        <td className='text-center'>{cval.quantity}</td>
                                        <td className='text-center'>  <button className="btn btn-dark text-center" onClick={() => updateItemQuantity(cval.id, cval.quantity - 1)}>-</button></td> */}
                                        {/* <td>{totalUniqueItems}</td> */}
                                        <td><button onClick={() => removeItem(cval.id)} className='btn btn-danger text-dark'>Remove</button></td>



                                    </tr>
                                )

                            })
                        }
                    </tbody>

                    <h3>Total={cartTotal}</h3>


                </table>
            </div>




        </>
    )
}

export default Cart