import React, { useState } from 'react'


const Counter = () => {


    const [count, setCount] = useState(0);


   
        return (
            <div>
                {/* <h1>Hello from counter</h1> */}
                <h1>{count}</h1>


                <button onClick={() => setCount(count + 1)} className='btn btn-outline-success'>++</button>

                <button onClick={() => setCount(count - 1)} className='btn btn-outline-danger'>--</button>
            </div>
        )
    }


export default Counter