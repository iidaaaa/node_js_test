const router = require("express").Router();

router.get('/', function(req, res) {

    const query = req.query.p;
  
    res.render('anser.ejs', {
      title: "結果"

    });
  
});
module.exports = router;