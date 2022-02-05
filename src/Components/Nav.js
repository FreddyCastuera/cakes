import React from 'react'
import Logo from '../Images/logo.svg'
export const Nav = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-purple px-5">
  			<div className="container-fluid">
    			<a className="navbar-brand" href="#">
						<img src={Logo} alt="logo" width="200" height="100" />
					</a>
    			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      			<span className="navbar-toggler-icon"></span>
    			</button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent ">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pasteles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Helados</a>
        </li>
				<li className="nav-item">
          <a className="nav-link" href="#">Galletas</a>
        </li>
				<li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
				<li className="nav-item">
          <a className="nav-link" href="#">Sucursales</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  	)
}
