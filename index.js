const unthrow = promise => promise
  .then(value => ({
    status: 'Ok',
    value,
  }))
  .catch(error => ({
    status: 'Error',
    error,
  }));

module.exports = unthrow;
