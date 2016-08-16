module.exports = {
  index: function(req, res){
    // res.send("test working");
    res.json(
      {
        "name": "Barnabas",
        "age": 27,
        "gender": "Male"
      }
    );
  }
};
