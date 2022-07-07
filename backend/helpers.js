
// Data Source=SQL5102.site4now.net;Initial Catalog=db_a8814d_lvwwg;User Id=db_a8814d_lvwwg_admin;Password=YOUR_DB_PASSWORD

exports.StringToBoolean = (text) => {
  return (text === 'T');
}

exports.BooleanToString = (val) => {
  if (val === true) {
    return "T";
  } else {
    return "F";
  }
}
