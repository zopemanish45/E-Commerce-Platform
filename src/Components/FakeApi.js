// import React, { useState, useEffect } from 'react'

// const FakeApi = () => {

//     const [data, setData] = useState([]);
//     const [filterList, setFilterList] = useState([]);

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//             .then(res => res.json())
//             .then(json => {
//                 setData(json)
//                 setFilterList(json)
//                 // console.log(json)
//             }
//             )
//     }, [])

//     const handleFilter = (items) => {
//         // console.log("function running")
//         const output = filterList.filter((product) => {
//             return product.category == items;
//         })
//         setData(output)
//     }
//     return (
//         <div>
//             <h1 className='text-center mt-4'>fake store API using useEffect</h1>
//             <div className='text-center'>

//                 <button className='btn btn-outline-primary mr-2' onClick={() => handleFilter("men's clothing")}>men's clothing</button>
//                 <button className='btn btn-outline-primary mr-2' onClick={() => handleFilter("women's clothing")}>women's clothing</button>
//                 <button className='btn btn-outline-primary mr-2' onClick={() => handleFilter("electronics")}>Electronics</button>
//                 <button className='btn btn-outline-primary mr-2' onClick={() => handleFilter("jewelery")}>jwellary</button>
//             </div>
//             <div className='container'>
//                 <div className='row mt-4'>
//                     {
//                         data.map((cval) => {
//                             return (
//                                 <>
//                                     <div className='col-md-4 '>
//                                         <div className="card">
//                                             <img src={cval.image} className="card-img-top " id="adjust" />
//                                             <div className="card-body">
//                                                 <h5 className="card-title">{cval.title}</h5>
//                                                 <h5 className="card-title">{cval.category}</h5>


//                                                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                                 <a href="#" className="btn btn-primary">Go somewhere</a>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </>
//                             )
//                         })
//                     }

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default FakeApi