const helpers = require("../../backend/helpers");
var sql = require("mssql");
var fs = require('fs');
const queries = require('../queries/queries.json');
const config = require('../queries/database-config.json');
const { clearScreenDown } = require("readline");

exports.createImage = (req, res, next) => {
  // connect to your database
  console.log(req.body);
  sql.connect(config, (err) => {
    if (err) {
      console.log(err)
      res.status(500).json(err.message);
      return;
    }

    // create Request object
    var request = new sql.Request(); 

    // Add parameter
    request.input('source', sql.VarChar, req.body.imageSource);
    request.input('alt', sql.VarChar, req.body.alt);
    request.input('title', sql.VarChar, req.body.title);
    request.input('subtitle', sql.VarChar, req.body.subTitle);

    // query to the database and get the data
    request.query(queries.createImage, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
      } else {
        var data = { errorCode: 0, message: '' };

        //sql.close();

        // send data as a response
        res.status(200).json(data);
      }
    });
  });
}

exports.getImagesBulk = (req, res, next) => {
  // connect to your database
  sql.connect(config, (err) => {
    if (err) {
      console.log(err)
      res.status(500).json(err.message);
      return;
    }

    // create Request object
    var request = new sql.Request();

    // query to the database and get the data
    request.query(queries.getAllImages, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
        return;
      }

      var data = [];
      for (var rowIndex = 0; rowIndex < results.rowsAffected; rowIndex++) {
        data.push({
          id: results.recordset[rowIndex].ID,
          imageSource: results.recordset[rowIndex].IMAGESOURCE,
          alt: results.recordset[rowIndex].ALT,
          title: results.recordset[rowIndex].TITLE,
          subTitle: results.recordset[rowIndex].SUBTITLE,
        });
      }

      // sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}

exports.updateImage = (req, res, next) => {
  console.log('UpdateImage');
  console.log(req.body);
  // connect to your database
  sql.connect(config, (err) => {
    if (err) {
      console.log(err)
      res.status(500).json(err.message);
      return;
    }

    // create Request object
    var request = new sql.Request();

    // Add parameter
    request.input('id', sql.VarChar, req.body.id);
    request.input('source', sql.VarChar, req.body.imageSource);
    request.input('alt', sql.VarChar, req.body.alt);
    request.input('title', sql.VarChar, req.body.title);
    request.input('subtitle', sql.VarChar, req.body.subTitle);

    // query to the database and get the data
    request.query(queries.updateImage, (err, results) => {
      console.log(err);
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
        return;
      }

      var data = { errorCode: 0, message: '' };

      //sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}

exports.deleteImage = (req, res, next) => {
  console.log('deleteImage');
  console.log(req.params.id);
  // connect to your database
  sql.connect(config, (err) => {
    if (err) {
      console.log(err)
      res.status(500).json(err.message);
      return;
    }

    // create Request object
    var request = new sql.Request();

    // Add parameter
    request.input('id', sql.VarChar, req.params.id);

    // query to the database and get the data
    request.query(queries.deleteImage, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
        return;
      }

      var data = { errorCode: 0, message: '' };

      // sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}

exports.uploadImage = (req, res, next) => {
  try {
    console.log('uploadImage');

    if (!req.files) {
      console.log('uploadImage: !req.files');
      var data = { errorCode: 2, message: 'No file to uploaded.' };
      res.status(200).json(data);
    } else {
      console.log('uploadImage: moving');
      console.log(req.files);

      // Use the name of the input field (i.e. "image") to retrieve the uploaded file
      let image = req.files.file;
      console.log(image);

      let destName = './assets/images/' + image.name;

      fs.stat(destName, (err, stats) => {
        console.log(stats);
        if (stats && stats.isFile(destName)) {
          console.log('uploadImage: duplicate');
          var data = { errorCode: 1, message: 'The file already exists.' };
          res.status(200).json(data);
        } else {
          // Use the mv() method to place the file in assets/images directory (i.e. "assets/images")
          image.mv(destName);

          console.log('uploadImage: moved, sending response');
          // send response
          var data = { errorCode: 0, message: image.name };
          res.status(200).json(data);
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

