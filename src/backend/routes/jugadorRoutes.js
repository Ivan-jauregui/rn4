const express = require('express');
const jugadorController = require('../controllers/jugadorController');
const router = express.Router();

router.get('/', jugadorController.list);       
router.post('/', jugadorController.create);     
router.put('/:id', jugadorController.update);   
router.delete('/:id', jugadorController.delete);

module.exports = router;
