"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000;
app.get("/", function (req, res) {
  return res.status(200).json({
    message: "Welcome to the home"
  });
});
app.listen(PORT, function () {
  return console.log("app started at ".concat(PORT));
});