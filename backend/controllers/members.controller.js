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

exports.createMember = (req, res, next) => {
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
    request.input('firstname', sql.VarChar, req.body.firstName);
    request.input('lastname', sql.VarChar, req.body.lastName);
    request.input('email', sql.VarChar, req.body.email);
    request.input('password', sql.VarChar, req.body.password);
    request.input('admin', sql.VarChar, helpers.BooleanToString(req.body.admin));

    // INSERT INTO [dbo].[MEMBERS] ([ID],[FIRSTNAME],[LASTNAME],[EMAIL],[PASSWORD],[ADMIN]) VALUES (New@firstname,@lastname,@email,@password,@admin

    // query to the database and get the data
    request.query(queries.createMember, (err, results) => {
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

exports.getMembersBulk = (req, res, next) => {
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
    request.query(queries.getAllMembers, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
        return;
      }

      var data = [];
      for (var rowIndex = 0; rowIndex < results.rowsAffected; rowIndex++) {
        data.push({
          id: results.recordset[rowIndex].ID,
          firstName: results.recordset[rowIndex].FIRSTNAME,
          lastName: results.recordset[rowIndex].LASTNAME,
          email: results.recordset[rowIndex].EMAIL,
          password: results.recordset[rowIndex].PASSWORD,
          admin: helpers.StringToBoolean(results.recordset[rowIndex].ADMIN)
        });
      }

      sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}

exports.updateMember = (req, res, next) => {
  console.log('UpdateMember');
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
    request.input('firstname', sql.VarChar, req.body.firstName);
    request.input('lastname', sql.VarChar, req.body.lastName);
    request.input('email', sql.VarChar, req.body.email);
    request.input('password', sql.VarChar, req.body.password);
    request.input('admin', sql.VarChar, helpers.BooleanToString(req.body.admin));

    // query to the database and get the data
    request.query(queries.updateMember, (err, results) => {
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

exports.deleteMember = (req, res, next) => {
  console.log('deleteMember');
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
    request.query(queries.deleteMember, (err, results) => {
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
