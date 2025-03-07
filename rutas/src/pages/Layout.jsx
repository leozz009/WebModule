import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header className="p-p-3 text-bg-dark w-100 fixed-top text-bg-dark py-3">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </NavLink>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink to="/Home" className="nav-link px-2 text-white">Home</NavLink></li>
              <li><NavLink to="/Perfil" className="nav-link px-2 text-white">Profile</NavLink></li>
              <li><NavLink to="/Dashboard" className="nav-link px-2 text-white">Dashboard</NavLink></li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
            </form>

            <div className="text-end">
              <NavLink to="/Login" className="btn btn-outline-light me-2">Login</NavLink>
            </div>
          </div>
        </div>
      </header>

      <hr />
      <Outlet />
    </div>
  );
};
