var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'InfoTeam' });
});

router.get('/commentaire', function (req,res,next){
  res.render('commentaire', {title: 'page des commentaires'})
});





module.exports = router;
