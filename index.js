var path = require('path');

module.exports = function(robot) {
  robot.loadFile(path.resolve(__dirname, "src"), "librato.js");
};
