const unthrow = promise => promise
  .then(result => ({
    status: 'Ok',
    value: result,
  }))
  .catch(err => ({
    status: 'Error',
    error: err,
  }));

module.exports = unthrow;
