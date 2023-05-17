const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000; 
app.use(cors());


app.get('/', (req, res) => {
  res.send('¡El servidor está funcionando!');
});

const fileRoutes = require('./routes/fileRoutes');

app.use('/api/files', fileRoutes);



app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
  
});
