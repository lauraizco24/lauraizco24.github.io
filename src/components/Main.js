import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import cumple from '../img/cupcake.jpg'
import despe from '../img/despedidas.jpg'

function Main() {

  return (

    <div>
      <div className='seccionPrincipal' >
        <div className='row'>
          <div className="col-12">
            <h1><span><b className="tituloPrincipal">Arma tu Cumple</b></span></h1>
            <h2 className="slogan ">Todo para tu fiesta, en un solo lugar</h2>
            <Button type="button" className="btn btn-primary btn-lg">Comenzá Acá</Button>
          </div>
        </div>
      </div>

      <div className="serviciosIndex">
     
        <div className="tituloServicios">
          <h1>Servicios</h1>
        
        </div>

        <div className="serviciosCards">
          <CardColumns>
            {/* Tarjeta de Servicio de Cumpleaños*/}
            <Card>
              <Card.Img className= "imagenServicio" variant="top" src={cumple} />
              <Card.Body>
                <Card.Title>Cumpleaños</Card.Title>
                <Card.Text>
                  Planifica todo para tu fiesta de cumpleaños desde un solo lugar!
      </Card.Text>
              </Card.Body>
            </Card>
{/* Tarjeta de Servicio de Despedidas*/}
            <Card>
              <Card.Img className= "imagenServicio" variant="top" src={despe} />
              <Card.Body>
                <Card.Title>Despedidas</Card.Title>
                <Card.Text>
                  Todo para tus despedidas: de Solter@, Divorciad@s, Viajes entre otros.
      </Card.Text>
              </Card.Body>
            </Card>
{/* Tarjeta de Servicio de BabyShowers*/}
            <Card>
              <Card.Img className= "imagenServicio" variant="top" src={cumple} />
              <Card.Body>
                <Card.Title>Baby Showers</Card.Title>
                <Card.Text>
                  Todo para que tengas el mejor baby Shower del mundo!
      </Card.Text>
              </Card.Body>
            </Card>
            
            
          </CardColumns>
        </div>
      </div>
    </div>
  );


}
export default Main;
