const express = require('express');
const { getMedia, createMedia, updateMedia, deleteMedia } = require('../controllers/mediaController');
const validate = require('../middleware/Validate');

const router = express.Router();

router.get('/', getMedia);
router.post('/', validate, createMedia);
router.put('/:id', validate, updateMedia);
router.delete('/:id', deleteMedia);

module.exports = router;