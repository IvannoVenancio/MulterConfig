const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const clienteRoutes = require('./routes/routes');
const path = require('path');

const app = express();

app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

app.use(clienteRoutes);

app.listen(3002, () => {
    console.log('Servidor rodando na porta 3000');
});
