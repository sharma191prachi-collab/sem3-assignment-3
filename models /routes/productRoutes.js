const express = require('express');
const ctrl = require('../controllers/productController');
const validateObjectId = require('../middleware/validateObjectId');
const validateStock = require('../middleware/validateStock');

const router = express.Router();

// IMPORTANT: static routes must come BEFORE '/:id', otherwise 'low-stock' is treated as an ID
router.get('/low-stock', ctrl.getLowStock);
router.get('/summary', ctrl.getCategorySummary);

router.route('/').get(ctrl.getProducts).post(ctrl.createProduct);

router
  .route('/:id')
  .all(validateObjectId)
  .get(ctrl.getProductById)
  .put(ctrl.updateProduct)
  .delete(ctrl.deleteProduct);

router.patch('/:id/stock', validateObjectId, validateStock, ctrl.adjustStock);

module.exports = router;
