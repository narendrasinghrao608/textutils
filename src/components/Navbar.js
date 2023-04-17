import React from 'react'
import PropTypes from 'prop-types'
import {Outlet,Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  {/* <a className="navbar-brand" href="/">{props.title}</a> */}
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
     
    </ul>
    <div className="d-flex">
      <div className="bg-primary rounded mx-2" style={{height
      :'30px',width:'30px',cursor:'pointer' }} onClick={()=>{props.togglemode('primary')}}></div>
    </div>
    <div className="d-flex">
      <div className="bg-success rounded mx-2 my-1" style={{height
      :'30px',width:'30px',cursor:'pointer' }} onClick={()=>{props.togglemode('success')}}></div>
    </div>
    <div className="d-flex">
      <div className="bg-danger rounded mx-2 my-1" style={{height
      :'30px',width:'30px',cursor:'pointer' }} onClick={()=>{props.togglemode('danger')}}></div>
    </div>
    <div className="d-flex">
      <div className="bg-warning rounded mx-2 my-1" style={{height
      :'30px',width:'30px',cursor:'pointer' }} onClick={()=>{props.togglemode('warning')}}></div>
    </div>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode1} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
</div>
  </div>
</nav>
<Outlet />
</>
  )
}
// Navbar.propTypes={title:PropTypes.string.isRequired,
//             aboutText:PropTypes.string.isRequired}
Navbar.propTypes={
  title:PropTypes.string.isRequired,
  aboutText:PropTypes.string.isRequired
};
// Navbar.defaultProps={
//     title:'Set title',
//     aboutText:'About'
// };
Navbar.defaultProps={
  title:'Set title',
  aboutText:"About"
};