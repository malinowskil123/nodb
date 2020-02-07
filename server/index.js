const express = require('express')
const cors = require('cors')
const ctrl = require('./controller/controller')

const app = express()
const PORT = 4040

app.use(express.json())
app.use(cors())

//endpoints-----------

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
