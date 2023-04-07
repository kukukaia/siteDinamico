//Fazendo a importaçao do pacote que acabou de instalar
// criando uma constante com o nome de app (pode ser o nome que quiser) que inicia o pacote chamado anteriormente)
const express = require('express');
const app = express();
const path = require('path');

const routes = require('./routes');
const trabalhoRouter = require('./routes/trabalhos');
const processoRouter = require('./routes/processos');
const arRouter = require('./routes/ar');

// Define a pasta "public" como a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Define a pasta "views" como a pasta de arquivos de visualização
app.set('views', path.join(__dirname, 'views'));

// Define o motor de visualização como o EJS
app.set('view engine', 'ejs');

// Importa as rotas do arquivo "routes.js"
//const routes = require('./routes');

/*app.get('/' , function (req,res){
    res.send('Bem-vindo ao meu site dinâmico!')// envia uma mensagem para o usuário
});*/
app.get('/', function(req, res) {
    res.render('index');
});

// Usa as rotas definidas no arquivo "routes.js"
app.use('/', routes);
app.use('/trabalhos', trabalhoRouter);
app.use('/processos', processoRouter);
app.use('/ar', arRouter)


app.listen(3000),() => {
    console.log('O servidor está rodando na porta 3000!');
};
