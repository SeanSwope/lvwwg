const helpers = require("../../backend/helpers");
var sql = require("mssql");
const queries = require('../queries/queries.json');
const config = require('../queries/database-config.json');

exports.createLink = (req, res, next) => {
  // connect to your database
  console.log(req.body);
  sql.connect(config, (err) => {
    if (err) {
      console.log(err)
      res.status(500).json(err.message);
      return;
    }

    // create duplicate search Request object
    var duplicateRequest = new sql.Request();

    // Add parameter
    duplicateRequest.input('name', sql.VarChar, req.body.companyName);
    duplicateRequest.input('category', sql.VarChar, req.body.category);

    // query to the database and get the data
    duplicateRequest.query(queries.duplicateLink, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
      } else {
        if (results.rowsAffected !== 0) {
          if (results.recordset[0].COUNT === 1) {
            // send ITEM EXISTS as a response
            var data = { errorCode: 1, message: 'Item already exists.' };
            res.status(200).json(data);
          }
        }

        // create Request object
        var request = new sql.Request();

        // Add parameter
        request.input('name', sql.VarChar, req.body.companyName);
        request.input('addr1', sql.VarChar, req.body.streetAddress);
        request.input('addr2', sql.VarChar, req.body.streetAddress2);
        request.input('city', sql.VarChar, req.body.cityStateAddress);
        request.input('contact', sql.VarChar, req.body.contact);
        request.input('phone', sql.VarChar, req.body.phone);
        request.input('msg', sql.VarChar, req.body.moreInfo);
        request.input('url', sql.VarChar, req.body.url);
        request.input('category', sql.VarChar, req.body.category);

        // query to the database and get the data
        request.query(queries.createLink, (err, results) => {
          if (err) {
            console.log(err)
            res.status(500).json(err.message);
          } else {
            var data = { errorCode: 0, message: '' };

            // send data as a response
            res.status(200).json(data);
          }
        });
      }
    });
  });
}

exports.getLinksBulk = (req, res, next) => {
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
    request.query(queries.getAllLinks, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
        return;
      }

      var data = [];
      for (var rowIndex = 0; rowIndex < results.rowsAffected; rowIndex++) {
        data.push({
          id: results.recordset[rowIndex].ID,
          companyName: results.recordset[rowIndex].COMPANYNAME,
          streetAddress: results.recordset[rowIndex].STREETADDRESS,
          streetAddress2: results.recordset[rowIndex].STREETADDRESS2,
          cityStateAddress: results.recordset[rowIndex].CITYSTATEADDRESS,
          contact: results.recordset[rowIndex].PHONE,
          phone: results.recordset[rowIndex].MESSAGE,
          moreInfo: results.recordset[rowIndex].MESSAGE,
          url: results.recordset[rowIndex].URL,
          category: results.recordset[rowIndex].CATEGORY
        });
      }
      // sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}

exports.updateLink = (req, res, next) => {
  console.log('UpdateLink');
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
    request.input('name', sql.VarChar, req.body.companyName);
    request.input('addr1', sql.VarChar, req.body.streetAddress);
    request.input('addr2', sql.VarChar, req.body.streetAddress2);
    request.input('city', sql.VarChar, req.body.cityStateAddress);
    request.input('contact', sql.VarChar, req.body.contact);
    request.input('phone', sql.VarChar, req.body.phone);
    request.input('msg', sql.VarChar, req.body.moreInfo);
    request.input('url', sql.VarChar, req.body.url);
    request.input('category', sql.VarChar, req.body.category);

    // query to the database and get the data
    request.query(queries.updateLink, (err, results) => {
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

exports.deleteLink = (req, res, next) => {
  console.log('deleteLink');
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
    request.query(queries.deleteLink, (err, results) => {
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

exports.getCategories = (req, res, next) => {
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
    request.query(queries.getCategories, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
        return;
      }

      var data = [];
      for (var rowIndex = 0; rowIndex < results.rowsAffected; rowIndex++) {
        data.push({
          id: results.recordset[rowIndex].ID,
          name: results.recordset[rowIndex].CATEGORY
        });
      }
      // sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}
