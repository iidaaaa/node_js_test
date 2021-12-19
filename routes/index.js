const router = require("express").Router();

router.get("/", (req, res) => {
  const data = {
    title: "タイトル",
    items: [
      { name: "ABC" },
      { name: "DEF" },
      { name: "GHI" }
    ]
  };
  // data を ejs に渡す
  res.render("index.ejs", data);
});

module.exports = router;