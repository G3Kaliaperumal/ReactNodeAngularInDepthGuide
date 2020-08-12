const { db } = require("../models/user");

exports.mongoErrorHandler = (req, res, next) => {

  res.sendApiError = config => {
    const { status = 422, title, detail } = config;
    return res.status(status).send({ errors: [title, detail] });
  }

  res.mongoError = dbError => {
    const normalizedErrors = [];
    const errorsField = 'errors';

    if (dbError && dbError.hasOwnProperty(errorsField) && dbError.name == 'ValidationError') {
      const errors = dbError[errorsField];

      for (let property in errors) {
        normalizedErrors.push({ title: property, detail: errors[property].message })
      }
    } else {
      normalizedErrors.push({ title: 'Db Error', detail: 'Ooops, something went wrong!' });
    }

    return res.status(422).send({ errors: normalizedErrors });
  }

  next();
}
