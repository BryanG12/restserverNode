const express = require('express');
const cors = require('cors');

class Server{
  
  constructor(){

    this.app = express();
    this.port = process.env.PORT;
    this.userPath = '/api/user';

    //*Middlewares 
    this.middlewares();

    //*Rutas de mi aplicación
    this.routes();
  }

  middlewares(){

    //*cors
    this.app.use(cors());

    //* lectura y parseo del body
    this.app.use(express.json());

    //*Directorio Publico
    this.app.use(express.static('public'));
  }

  routes(){
    this.app.use(this.userPath,require('../routes/user'));

  }

  listen(){
    this.app.listen(this.port,()=>{
      console.log('Seridor corriendo en el puerto ',this.port);
    })
  }
}

module.exports = Server;



