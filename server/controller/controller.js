const list = []
let id = 0

module.exports = {
  getTaskList: (req, res) => {
    res.status(200).send(list)
  },
  addTask: (req, res) => {
    const { text, date, dueDate } = req.body
    list.push({
      id: id,
      date: date,
      text: text,
      dueDate: dueDate
    })
    id++
    res.status(200).send(list)
  },
  updateTask: (req, res) => {
    const { id } = req.params
    const { text, dueDate } = req.body
    let index = list.findIndex(elm => elm.id === +id)
    list[index] = {
      id: list[index].id,
      date: list[index].date,
      text: text || list[index].text,
      dueDate: dueDate || list[index].dueDate
    }
    res.status(200).send(list)
  },
  deleteTask: (req, res) => {
    const { id } = req.params
    let index = list.findIndex(elm => elm.id === +id)
    if (index !== -1) list.splice(index, 1)
    res.status(200).send(list)
  },
  searchTask: (req, res) => {
    const { text } = req.query
    let filterdArr = list.filter(elm => elm.text.includes(text))
    res.status(200).send(filterdArr)
  }
}
