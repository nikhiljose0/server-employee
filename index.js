require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router=require('./Routes/route')
require('./Connection/fb')

const empServer = express();

empServer.use(cors());
empServer.use(express.json())
empServer.use(router) 

const PORT = process.env.PORT || 3000;

empServer.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});