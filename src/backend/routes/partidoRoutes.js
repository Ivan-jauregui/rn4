const express = require('express');
const partidoController = require('../controllers/partidoController');
const router = express.Router();

router.get('/', partidoController.list);         
router.post('/', partidoController.create);
router.put('/:id', partidoController.update);  
router.delete('/:id', partidoController.delete);

module.exports = router;
