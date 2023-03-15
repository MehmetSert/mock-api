const express = require('express');
const apiMocker = require('connect-api-mocker');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors({origin: '*'}));
app.use('/api', apiMocker('api'));

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});