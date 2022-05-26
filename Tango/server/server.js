const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));

require('./config/mongoose.config');
require('./routes/tango.routes')(app);







const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
