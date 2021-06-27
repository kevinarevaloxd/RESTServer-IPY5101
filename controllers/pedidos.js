const { response, request } = require('express');


const pedidosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'pedidos get API Controller',
        query
    })
  }

const pedidosPost = (req, res = response) => {

    const { id_pedido , id_cliente, nombre_cliente , id_producto, producto, marca, cantidad, precio_unidad, monto_total} = req.body;

    res.status(201).json({
        msg: 'pedidos post API Controller',
        id_pedido,
        id_cliente,
        nombre_cliente,
        id_producto,
        producto,
        marca,
        cantidad,
        precio_unidad,
        monto_total
    })
  }

const pedidosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'pedidos put API Controller',
        id
    })
  }

const pedidosDelete = (req, res = response) => {
    res.json({
        msg: 'pedidos delete API Controller',
        id
    })
  }



module.exports = {
    pedidosGet,
    pedidosPost,
    pedidosPut,
    pedidosDelete
}