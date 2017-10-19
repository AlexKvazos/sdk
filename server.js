var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(3000, function() {
  console.log('\x1b[32mBuildFire SDK running on port [::]:3000');
});
