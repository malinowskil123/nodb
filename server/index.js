const express = require('express')
const cors = require('cors')
const ctrl = require('./controller/controller')
const resources = require('./resources')
const app = express()

app.use(express.json())
app.use(cors())

//endpoints-----------
app.get(resources.URL, ctrl.getTaskList)
app.post(resources.URL, ctrl.addTask)
app.put(`${resources.URL}/:id`, ctrl.updateTask)
app.delete(`${resources.URL}/:id`, ctrl.deleteTask)

app.listen(resources.PORT, () =>
  console.log(`server running on port: ${resources.PORT}`)
)
