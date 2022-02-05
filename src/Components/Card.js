import React from 'react'
const sizes = {
	'L':'Grande',
	'S':'Chico',
	'M':'Mediano'
}
const toppings = ['Fondeau','Betun italiano','Chantilly']

const formatPrice = (price) => '$'+parseFloat(price).toFixed(2)

const capitalize = (name) => name.slice(0,1).toUpperCase()+name.slice(1).toLowerCase()


export const Card = ({cake}) => {
	const {name,imageUrl,description,price,comboPrice,toppingType,size} = cake
  return (
		<div className='px-5 py-2'>
    <div className='container border border-2 rounded '>
      <div className='row'>
				<div className='col-12 col-md-8 border-bottom border-2 d-flex align-items-center justify-content-center justify-content-md-start'>
					<span className='fw-bold fs-5'>{capitalize(name)}</span>
				</div>
				<div className='d-none d-md-block col-2 bg-red p-3'>pastel</div>
				<div className='d-none d-md-block col-2 bg-orange p-3'>paquete</div>
      </div>      
			<div className='row '>
				<div className='col-12 col-md-8 d-flex flex-column flex-md-row'>
					<div className=' w-100 p-3 '>
					<img  
						src={imageUrl}
						className = 'img-fluid '
						
					/>
					</div>
					<div className='d-flex flex-column align-items-start ms-3'>
						<p className='text-start mt-3'>{description}</p>
						<p><span className='fw-bold'>tamano:</span>{sizes[size]}</p>
						<p><span className='fw-bold'>topping:</span>{toppings[toppingType]}</p>
					</div>
					<div>

					</div>
				</div>

				<div className='d-none d-md-block col-2 d-flex flex-column'>
					<p className='fw-bold fs-6 mt-2'>15-17 personas</p>
					<p className='fw-bold mb-0 price'>{formatPrice(price)}</p>
					<span className='text-muted mb-4'>*solo pastel</span>
					<button className='btn btn-blue rounded-pill mb-5'>seleccionar</button>
				</div>
				<div className='d-none d-md-block col-2 d-flex flex-column'>
					<p className='fw-bold mt-2'>15-17 personas</p>
					<p className='fw-bold mb-0 price'>{formatPrice(comboPrice)}</p>
					<span className='text-muted mb-4'>*Bebidas Incluidas</span>
					<button className='btn btn-blue rounded-pill mb-5'>seleccionar</button>
				</div>
			</div>      
		<div className='row'>
			<div className='d-block d-md-none col-6 d-flex flex-column'>
					<div className='bg-red p-3'>pastel</div>
					<p className='fw-bold fs-6 mt-2'>15-17 personas</p>
					<p className='fs-1 fw-bold mb-0'>{formatPrice(price)}</p>
					<span className='text-muted mb-4'>*solo pastel</span>
					<button className='btn btn-blue rounded-pill mb-5'>seleccionar</button>
				</div>
				<div className='d-block d-md-none col-6 d-flex flex-column'>
					<div className='bg-orange p-3'>paquete</div>
					<p className='fw-bold mt-2'>15-17 personas</p>
					<p className='fs-1 fw-bold mb-0'>{formatPrice(comboPrice)}</p>
					<span className='text-muted mb-4'>*Bebidas Incluidas</span>
					<button className='btn btn-blue rounded-pill mb-5'>seleccionar</button>
				</div>
		</div>
    </div>
		</div>
  )
}
