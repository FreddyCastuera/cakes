import React from 'react'

export const Select = ({title,name,options,value,onChange,element:Element}) => {
	return (
		<div className='w-25 position-relative mx-1'>
			<div className='position-absolute top-25 start-7 '>
				<Element />
			</div>
			<select 
				className="form-select form-select-lg w-100  input" 
				aria-label=".form-select-lg example" 
			
				value={value}
				onChange={onChange}
				>
				<option value={title} hidden>{title}</option>
				{
					options.map((option,key)=>(
						<option key={key} value={option}>{option}</option>
					))
				}
			</select>
		</div>

	)
}
