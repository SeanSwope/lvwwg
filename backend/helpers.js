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
