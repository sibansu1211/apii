const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
const task= [
    { id:1, title:"Test Task1", is_completed:true},
    { id:2, title:"Test Task2", is_completed:false}
]
const tasks= [
    { id:1, title:"Test Task1", is_completed:true},
    { id:2, title:"Test Task2", is_completed:false},
    { id:3, title:"Test Task1", is_completed:false}
]
const task2=[
    { id:3, title:"Test Task1", is_completed:false}
]
app.post('/v1/tasks', (req, res) => {
    res.render('', {
        task
    })
})
app.get('/v1/tasks', (req, res) => {
    res.render('', {
        task
    })
})
app.get('/v1/tasks/{id}', (req, res) => {
    res.render('', {
        task2
    })
})
app.delete('/v1/tasks/{id}', (req, res) => {
    res.render('', {
        
    })
}) 
app.put('/v1/tasks/{id}', (req, res) => {
    res.render('', {
        
    })
})
app.post('/v1/tasks', (req, res) => {
    res.render('', {
        tasks
    })
})
app.delete('/v1/tasks', (req, res) => {
    res.render('', {
        
    })
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})