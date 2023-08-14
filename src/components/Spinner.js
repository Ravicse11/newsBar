import React from 'react'
import Loading from './Loading.gif'
const Spinner = () => {

    return (
        <div className="d-flex justify-content-center">
            <img src={Loading} alt="Loading" />
        </div>
    )

}

export default Spinner
