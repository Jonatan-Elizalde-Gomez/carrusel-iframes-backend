const fs = require('fs');
const path = require('path');

const uploadFile = (req, res) => {
  if (req.file.mimetype != 'text/html') {
    console.error('Formato de archivo invalido');
    return res.status(500).send('Formato de archivo invalido');
  }

  const currentDate = new Date().toLocaleTimeString().replace(/:/g, '');
  const originalName = req.file.originalname;
  const newFileName = `${currentDate}-${originalName}`;
  const filePath = path.join(__dirname, '../uploads', newFileName);
  fs.rename(req.file.path, filePath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al subir el archivo');
    }

    console.log('Archivo subido correctamente');
    res.status(200).send('Archivo subido correctamente');
  });

};

module.exports = {
  uploadFile,
};
