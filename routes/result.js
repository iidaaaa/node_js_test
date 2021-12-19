const router = require("express").Router();

router.get('/', function(req, res) {
    const data = {
      p01 : {
        pageNum: 01,
        author: "aaa"
      },
      p02 : {
        pageNum: 02,
        author: "bbb"
      }
    };
  
    const query = req.query.p;
  
    res.render('result.ejs', {
      title: "結果",
      pageNum: data[query].pageNum,
      author: data[query].author
    });
  
});


router.post('/', function(req, res, next) {

  console.log('test');
  var name = req.body.name;
  console.log(name);
  var age = req.body.age;

  res.render('result.ejs', {
    title: "結果！",
    name: name,
    age: age
  });

});

module.exports = router;