const express = require('express');
const router = express.Router();

const {
	getProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct,
} = require('../controllers/product-controller');
const reviewRoutes = require('./review-route');

router.use('/:productId/reviews', reviewRoutes);

router.get('', getProducts);
router.get('/:id', getProduct);
router.post('', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
