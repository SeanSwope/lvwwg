const helpers = require("../../backend/helpers");
var sql = require("mssql");
const queries = require('../queries/queries.json');
const config = require('../queries/database-config.json');

// var config = {
//   user: 'lvwwgdb',
//   password: '12345',
//   server: 'PC-03',
//   database: 'lvwwg',
//   port: 1433,
//   dialect: 'mssql',
//   options: { encrypt: false },
// };

exports.createDonation = (req, res, next) => {
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
    request.input('orgName', sql.VarChar, req.body.organizationName);
    request.input('year', sql.VarChar, req.body.donationYear);
    request.input('blocks', sql.Numeric, req.body.blockSets);
    request.input('cars', sql.Numeric, req.body.racecars);
    request.input('horses', sql.Numeric, req.body.rockingHorses);
    request.input('trains', sql.Numeric, req.body.trains);
    request.input('wands', sql.Numeric, req.body.wands);
    request.input('misc', sql.VarChar, req.body.misc);

    // query to the database and get the data
    request.query(queries.createDonation, (err, results) => {
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

exports.getDonationsBulk = (req, res, next) => {
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
    request.query(queries.getAllDonations, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
        return;
      }

      var data = [];
      for (var rowIndex = 0; rowIndex < results.rowsAffected; rowIndex++) {
        data.push({
          id: results.recordset[rowIndex].ID,
          organizationName: results.recordset[rowIndex].ORGANIZATIONNAME,
          donationYear: results.recordset[rowIndex].DONATIONYEAR,
          blockSets: results.recordset[rowIndex].BLOCKSETS,
          racecars: results.recordset[rowIndex].RACECARS,
          rockingHorses: results.recordset[rowIndex].ROCKINGHORSES,
          trains: results.recordset[rowIndex].TRAINS,
          wands: results.recordset[rowIndex].WANDS,
          misc: results.recordset[rowIndex].MISC,
        });
      }

      // sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}

exports.updateDonation = (req, res, next) => {
  console.log('UpdateDonation');
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
    request.input('orgName', sql.VarChar, req.body.organizationName);
    request.input('year', sql.VarChar, req.body.donationYear);
    request.input('blocks', sql.Numeric, req.body.blockSets);
    request.input('cars', sql.Numeric, req.body.racecars);
    request.input('horses', sql.Numeric, req.body.rockingHorses);
    request.input('trains', sql.Numeric, req.body.trains);
    request.input('wands', sql.Numeric, req.body.wands);
    request.input('misc', sql.VarChar, req.body.misc);

    // query to the database and get the data
    request.query(queries.updateDonation, (err, results) => {
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

exports.deleteDonation = (req, res, next) => {
  console.log('deleteDonation');
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
    request.query(queries.deleteDonation, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
        return;
      }

      var data = { errorCode: 0, message: '' };

      sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}
