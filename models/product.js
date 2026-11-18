const AppError = require('../utils/AppError');

// Validates body of PATCH /:id/stock  -> { "change": 10 } or { "change": -3 }
module.exports = (req, res, next) => {
  const { change } = req.body;

  if (typeof change !== 'number' || !Number.isInteger(change)) {
    return next(new AppError("'change' must be an integer (positive = restock, negative = sale)", 400));
  }
  if (change === 0) {
    return next(new AppError("'change' cannot be 0", 400));
  }
  next();
};
