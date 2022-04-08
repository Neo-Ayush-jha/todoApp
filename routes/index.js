var express = require('express');
const { route } = require('express/lib/application');
const { home,insertTask,closeTask,removeTask } = require('../controllers/HomeController');
var router = express.Router();



router.get('/',home);
router.post("/",insertTask);
router.get("/close/:id",closeTask);
router.get("/remove/:id",removeTask);
module.exports = router;
