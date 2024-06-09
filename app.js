const express = require('express');
const systemOfJobsRouter = require('./routers/systemOfJobsRouter');
const conectarDB = require('./db/db')
const PORT = process.env.PORT || 3000;
const app = express();

const cors = require('cors');

//middleware

app.use(cors());

//Router
app.use('/api',systemOfJobsRouter);
app.get('/',(req,res) => {
    res.send('Servidor en linea -200(OK)')
});

app.listen(PORT,()=>{
    console.log(`El servidor esta escuchand en el puerto ${PORT}`)
});



