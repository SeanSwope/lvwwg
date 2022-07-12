const helpers = require("../../backend/helpers");
var sql = require("mssql");
var fs = require('fs');
const queries = require('../queries/queries.json');
const config = require('../queries/database-config.json');
const { clearScreenDown } = require("readline");

exports.createMarketItem = (req, res, next) => {
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
    request.input('postedDate', sql.VarChar, req.body.postedDate); // Date
    request.input('postedBy', sql.VarChar, req.body.postedBy);
    request.input('contactInfo', sql.VarChar, req.body.contactInfo);
    request.input('name', sql.VarChar, req.body.name);
    request.input('descr', sql.VarChar, req.body.description);
    request.input('price', sql.Numeric, req.body.price);
    request.input('image', sql.VarChar, req.body.image);

    // query to the database and get the data
    request.query(queries.createMarketItem, (err, results) => {
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

exports.getMarketItemsBulk = (req, res, next) => {
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
    request.query(queries.getAllMarketItems, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
        return;
      }

      var data = [];
      for (var rowIndex = 0; rowIndex < results.rowsAffected; rowIndex++) {
        data.push({
          id: results.recordset[rowIndex].ID,
          postedDate: results.recordset[rowIndex].POSTEDDATE,  // Date
          postedBy: results.recordset[rowIndex].POSTEDBY,
          contactInfo: results.recordset[rowIndex].CONTACTINFO,
          name: results.recordset[rowIndex].NAME,
          description: results.recordset[rowIndex].DESCRIPTION,
          price: results.recordset[rowIndex].PRICE,
          image: results.recordset[rowIndex].IMAGE
        });
      }

      // sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}

exports.updateMarketItem = (req, res, next) => {
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
    request.input('postedDate', sql.VarChar, req.body.postedDate); // Date
    request.input('postedBy', sql.VarChar, req.body.postedBy);
    request.input('contactInfo', sql.VarChar, req.body.contactInfo);
    request.input('name', sql.VarChar, req.body.name);
    request.input('descr', sql.VarChar, req.body.description);
    request.input('price', sql.Numeric, req.body.price);
    request.input('image', sql.VarChar, req.body.image);

    // query to the database and get the data
    request.query(queries.updateMarketItem, (err, results) => {
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

exports.deleteMarketItem = (req, res, next) => {
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
    request.query(queries.deleteMarketItem, (err, results) => {
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

      let destName = './assets/market-items/' + image.name;

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
