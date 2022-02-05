import {FaSearch} from "react-icons/fa"
import React from 'react'
const options = ['grande','mediano','chico']

export const Search = ({value,onChange}) => {
	return (
		<div className='w-25 position-relative mx-1'>
			<div className='position-absolute top-25 start-2 ms-2'>
				<FaSearch/>
			</div>
			<input className='search rounded w-100' type="search" placeholder="nombre" value={value} onChange={onChange}/>
		</div>

	)
}