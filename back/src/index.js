require("./database");
/// -------------------------------- ///
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const app = express();


app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use(morgan('dev'));

app.use(cors());

// ROUTES

app.use('/api/usuarios', require('./Routes/Usuarios'))


app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});