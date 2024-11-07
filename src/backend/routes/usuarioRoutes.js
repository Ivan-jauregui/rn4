const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const router = express.Router();

router.get('/', usuarioController.list);              
router.post('/register', usuarioController.register); 
router.post('/login', usuarioController.login);    

module.exports = router;
