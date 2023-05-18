const fs = require('fs');
const path = require('path');

const listFile = (req, res) => {
    const directorioUploads = path.join(__dirname, '../uploads');

    // Leer el contenido de la carpeta
    fs.readdir(directorioUploads, (err, archivos) => {
      if (err) {
        console.error('Error al leer la carpeta de uploads:', err);
        return res.status(500).json({ error: 'Ocurrió un error al obtener la lista de archivos.' });
      }
  
      // Enviar la lista de archivos como respuesta
      res.json({ archivos });
    });
  

};

module.exports = {
    listFile,
};
