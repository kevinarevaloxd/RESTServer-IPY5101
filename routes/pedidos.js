const { Router } = require('express');
const { pedidosGet, pedidosPost, pedidosPut, pedidosDelete } = require('../controllers/pedidos');

const router = Router();

router.get('/', pedidosGet);

router.post('/', pedidosPost);

router.put('/:id', pedidosPut);

router.delete('/', pedidosDelete );

module.exports = router;
