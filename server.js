const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;


app.listen(port, () => console.log("Example app listening at http://localhost:"+port));