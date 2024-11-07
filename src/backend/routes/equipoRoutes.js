const express = require('express');
const equipoController = require('../controllers/equipoController');
const router = express.Router();

router.get('/', equipoController.list);
router.post('/', equipoController.create);
router.put('/:id', equipoController.update);
router.delete('/:id', equipoController.delete);

module.exports = router;
    