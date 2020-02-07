const express = require('express')
const cors = require('cors')
const ctrl = require('./controller/controller')
const baseUrl = require('./resources')

const app = express()
const PORT = 4040

app.use(express.json())
app.use(cors())

//endpoints-----------
app.get(baseUrl, ctrl.getTaskList)
app.post(baseUrl, ctrl.addTask)
app.put(`${baseUrl}/:id`, ctrl.updateTask)
app.delete(`${baseUrl}/:id`, ctrl.deleteTask)

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
