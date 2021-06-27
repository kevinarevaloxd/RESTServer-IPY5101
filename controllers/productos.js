const { response, request } = require('express');


const productosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'productos get API Controller',
        query
    })
  }

const productosPost = (req, res = response) => {

    const { id, nombre, marca, cantidad, precio} = req.body;

    res.status(201).json({
        msg: 'productos post API Controller',
        id,
        nombre,
        marca,
        cantidad,
        precio
    })
  }

const productosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'productos put API Controller',
        id
    })
  }

const productosDelete = (req, res = response) => {
    res.json({
        msg: 'productos delete API Controller'
    })
  }



module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}