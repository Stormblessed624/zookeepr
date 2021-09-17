const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(require('./zookeepersRoutes'));
router.use(animalRoutes);

module.exports = router;