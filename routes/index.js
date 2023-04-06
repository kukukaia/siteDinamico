const express = require('express');
const router = express.Router();
//const indexRouter = require('./routes/index');
const trabalhosRouter = require('./trabalhos');
const processosRouter = require('./processos');
const arRouter = require('./ar');

// Rotas para index
router.get('/', (req, res) => {
    res.render('index', { titulo: 'Meu Site' });
});
//router.use('/', indexRouter);

// Rotas para trabalhos
router.use('/trabalhos', trabalhosRouter);

// Rotas para processos
router.use('/processos', processosRouter);

// Rotas para ar
router.use('/ar', arRouter);

module.exports = router;







  