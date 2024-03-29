const express = require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT;
        this.clientesPath = '/api/clientes';
        this.productosPath = '/api/productos'
        this.pedidosPath = '/api/pedidos'
        
        // Middlewares
        this.middlewares();

        // Rutas de la app
        this.routes();

    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json() );

        // Directorio publico
        this.app.use (express.static('public'))
    }

    routes () {
        this.app.use(this.clientesPath, require('../routes/clientes'))
        this.app.use(this.productosPath, require('../routes/productos'))
        this.app.use(this.pedidosPath, require('../routes/pedidos'))
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server;