const express = require('express');
const estadisticaController = require('../controllers/estadisticaController');
const router = express.Router();

router.get('/', estadisticaController.list);        
router.post('/', estadisticaController.create);      
router.put('/:id', estadisticaController.update);    
router.delete('/:id', estadisticaController.delete);  

module.exports = router;
