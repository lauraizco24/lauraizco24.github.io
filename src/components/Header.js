import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import logo5 from '../img/logo5.png';

function Header() {
    return(

        <header className="header">
  <Nav className="navbar navbar-expand-lg navbar-light">
    <img className="logoATC" src={logo5} alt=""/>
    <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </Button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/Home"> Inicio <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/QuienesSomos">Quienes Somos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Servicios
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Cumpleaños</a>

            <a className="dropdown-item" href="#">Despedidas</a>
            <a className="dropdown-item" href="#">Baby Shower</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Contacto</a>
        </li>
      </ul>
      <ul>
        <li className="form-inline my-2 my-lg-0">
          <Button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-cart-arrow-down"></i></Button>
        </li>
      </ul>

    </div>
  </Nav>



  
</header>
    );
}

export default Header;