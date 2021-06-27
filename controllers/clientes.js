const { response, request } = require('express');


const clientesGet = (req = request , res = response) => {

    const query = req.query;

    res.json({
        msg: 'clientes get API Controller',
        query
    })
  }

const clientesPost = (req, res = response) => {

    const { id, nombre, ciudad, direccion} = req.body;

    res.status(201).json({
        msg: 'clientes post API Controller',
        id,
        nombre,
        ciudad,
        direccion
    })
  }

const clientesPut = (req, res = response) => {

const { id } = req.params;

    res.json({
        msg: 'clientes put API Controller',
        id
    })
  }

const clientesDelete = (req, res = response) => {
    res.json({
        msg: 'clientes delete API Controller'
    })
  }



module.exports = {
    clientesGet,
    clientesPost,
    clientesPut,
    clientesDelete
}