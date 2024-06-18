import React from 'react'
import Products from './Products'
import About from './About'
import Contact from './Contact'


const Home = () => {
    return (
        <div classNameName='hero'>
            <div className="card text-bg-dark border-0">
                <img src="assests\image3.jpg" className="card-img" alt="background" height="650px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div classNameName='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
                        <p className="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>

                        {/* <p className="card-text"><small>Last updated 3 mins ago</small></p> */}

                    </div>
                </div>
            </div>
         
            <Products/>
            <About/>
            <Contact/>
        </div>
    
    )
}

export default Home