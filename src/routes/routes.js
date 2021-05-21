const routes = require("express").Router();
const multer = require('multer');
const multerConfig = require('../controllers/uploadController');

routes.post('/upload', multer(multerConfig).single("file"), (req, res) => {
    console.log(req.file);
    return res.json({hello: 'Hello World'})
});



module.exports = routes;