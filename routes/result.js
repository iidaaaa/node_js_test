const router = require("express").Router();
var fs = require("fs");
const { checkServerIdentity } = require("tls");
const csv = require('csv');


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
  let newData = [];
  newData.push(name);
  newData.push(age);
  console.log(newData);
  fs.writeFileSync('out.txt', newData.toString());
  // csv.stringify(newData, (error, output)=>{
  //   fs.writeFile('out.csv', output,(error)=>{
  //     console.log('ok');
  //   })
  // })

  res.render('result.ejs', {
    title: "結果！",
    name: name,
    age: age
  });

});

module.exports = router;