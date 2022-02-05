import React from 'react'

export const Filters = ({children}) => {
    return (
        <div className='container d-flex flex-wrap  flex-md-nowrap justify-content-center align-items-center  bg-pink-2 filter  '>
            {children}
        </div>
    )
}
