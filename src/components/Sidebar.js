import React from 'react';
import './Sidebar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';

export default function Sidebar() {
  return (
    <Router>
      <div className='Sidebar'>
        <div className='container-fluid justify-content-between d-flex flex-column content-wrapper'>
          <div className='row'>
            <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
              <div className='sidebar-sticky'>
                <ul className='nav flex-column'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home'>
                      <i className='fas fa-home fa-fw'></i> Dashboard
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/orders'>
                      <i className='fas fa-file-invoice-dollar fa-fw'></i>{' '}
                      Orders
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/products'>
                      <i className='fas fa-shoe-prints fa-fw'></i> Products
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/customers'>
                      <i className='fas fa-id-card fa-fw'></i> Customers
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/reports'>
                      <i className='fas fa-file-alt fa-fw'></i> Reports
                    </Link>
                  </li>
                  <hr className='sidebar-divider'></hr>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/admin'>
                      <i className='fas fa-users-cog'></i> Admin
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
              <Route path='/'>
                <Home />
              </Route>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}