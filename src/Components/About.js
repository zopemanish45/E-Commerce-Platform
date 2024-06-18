import React from 'react'

const About = () => {
    return (
        <>
            <section className='text-center '>
                <div>
                    <h2 className=' fw-bolder'>About us </h2>
                </div>
                <div className='container'>
                    <div>
                        <h3>welcome To Our Website</h3>
                        <p className='lh-lg'>Discover the latest trends and innovition in technology,<br/>design and more.our team of experts brings you the best content<br/>
                         and  insights to help you stay ahead of the curve <br/> Whether you're looking for the latest fashion trends, electronics, home essentials, or gifts for your loved ones, we've got you covered.</p>
                        <button className='bg-warning'> Learn more..</button>
                    </div>
                    <div className='ms-2 p-3'>
                        <img src='assests\download.jpeg' height={300} width={350}/>

                    </div>

                </div>
            </section>


        </>

    )
}

export default About