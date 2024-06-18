import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, logout,user} = useAuth0();
    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white p-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="#">Simple Emart<img src='assests\iconSE.jpg' height="50" width={50}/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}


                        <div className='buttons'>

                        <NavLink>{isAuthenticated &&<p>{user.name}</p>}</NavLink> 
                            {
                                isAuthenticated ? (
                                    <NavLink to='/Register' className='btn btn-outline-dark ms-2' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    <i className='fa fa-user-plus m-1'></i>Log out</NavLink>

                                ):(

                                    <NavLink to='/Login' className='btn btn-outline-dark' onClick={() => loginWithRedirect()}>
                                        <i className='fa fa-sign-in m-1 '></i>Login</NavLink>
                                )}       



{/* 
                                    <NavLink to='/Register' className='btn btn-outline-dark ms-2'>
                                        <i className='fa fa-user-plus m-1'></i>Register</NavLink> */}

                                    <NavLink to='/cart' className='btn btn-outline-dark ms-2'>
                                        <i className='fa fa-shopping-cart m-1'></i>cart</NavLink>

                                </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar