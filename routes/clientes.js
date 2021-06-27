const { Router } = require('express');
const { clientesGet, clientesPost, clientesPut, clientesDelete } = require('../controllers/clientes');

const router = Router();

router.get('/', clientesGet);

router.post('/', clientesPost);

router.put('/:id', clientesPut);

router.delete('/', clientesDelete );

module.exports = router;

