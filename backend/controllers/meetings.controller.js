var sql = require("mssql");
//const fs = require('fs');
const queries = require('../queries/queries.json');
//var rawdata = fs.readFileSync('../queries/queries.json');
//var queries = JSON.parse(rawdata);

// Server=localhost;Database=master;Trusted_Connection=True;
var config = {
  user: 'lvwwgdb',
  password: '12345',
  server: 'PC-03',
  database: 'lvwwg',
  port: 1433,
  dialect: 'mssql',
  options: { encrypt: false },
};

exports.createMeeting = (req, res, next) => {
  //sql.close();
  // connect to your database
  sql.connect(config, (err) => {
    if (err) {
      console.log(err)
      res.status(500).json(err.message);
    }

    // create Request object
    var request = new sql.Request();

    // Add parameter
    request.input('datetime', sql.VarChar, req.body.dateTime);
    request.input('location', sql.VarChar, req.body.location);
    request.input('presenter', sql.VarChar, req.body.presenter);
    request.input('topic', sql.VarChar, req.body.topic);

    // query to the database and get the data
    request.query(queries.createMeeting, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
      }

      var data = { errorCode: 0, message: '' };

      //sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}

exports.getMeetings = (req, res, next) => {
  //sql.close();
  // connect to your database
  sql.connect(config, (err) => {
    if (err) {
      console.log(err)
      res.status(500).json(err.message);
    }

    // create Request object
    var request = new sql.Request();

    // query to the database and get the data
    request.query(queries.getMeetings, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
      }

      var data = [];
      for (var rowIndex = 0; rowIndex < results.rowsAffected; rowIndex++) {
        data.push({
          id: results.recordset[rowIndex].ID,
          dateTime: results.recordset[rowIndex].DATETIME,
          location: results.recordset[rowIndex].LOCATION,
          presenter: results.recordset[rowIndex].PRESENTER,
          topic: results.recordset[rowIndex].TOPIC
        });
      }

      sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}

exports.getMeetingsBulk = (req, res, next) => {
  //sql.close();
  // connect to your database
  sql.connect(config, (err) => {
    if (err) {
      console.log(err)
      res.status(500).json(err.message);
    }

    // create Request object
    var request = new sql.Request();

    // query to the database and get the data
    request.query(queries.getAllMeetings, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
      }

      var data = [];
      for (var rowIndex = 0; rowIndex < results.rowsAffected; rowIndex++) {
        data.push({
          id: results.recordset[rowIndex].ID,
          dateTime: results.recordset[rowIndex].DATETIME,
          location: results.recordset[rowIndex].LOCATION,
          presenter: results.recordset[rowIndex].PRESENTER,
          topic: results.recordset[rowIndex].TOPIC
        });
      }

      sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}

exports.updateMeeting = (req, res, next) => {
  console.log('UpdateMeeting');
  console.log(req.body);
  //sql.close();
  // connect to your database
  sql.connect(config, (err) => {
    if (err) {
      console.log(err)
      res.status(500).json(err.message);
    }

    // create Request object
    var request = new sql.Request();

    // Add parameter
    request.input('id', sql.VarChar, req.body.id);
    request.input('dt', sql.VarChar, req.body.dateTime);
    request.input('location', sql.VarChar, req.body.location);
    request.input('presenter', sql.VarChar, req.body.presenter);
    request.input('topic', sql.VarChar, req.body.topic);

    // query to the database and get the data
    request.query(queries.updateMeeting, (err, results) => {
      console.log(err);
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
      }

      var data = { errorCode: 0, message: '' };

      //sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}

exports.deleteMeeting = (req, res, next) => {
  console.log('deleteMeeting');
  console.log(req.params.id);
  //sql.close();
  // connect to your database
  sql.connect(config, (err) => {
    if (err) {
      console.log(err)
      res.status(500).json(err.message);
    }

    // create Request object
    var request = new sql.Request();

    // Add parameter
    request.input('id', sql.VarChar, req.params.id);

    // query to the database and get the data
    request.query(queries.deleteMeeting, (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).json(err.message);
      }

      var data = { errorCode: 0, message: '' };

      sql.close();

      // send data as a response
      res.status(200).json(data);
    });
  });
}
