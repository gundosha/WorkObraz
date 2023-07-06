const express = require('express');
const bodyParser = require('body-parser')
const mailer = require('./nodemailer')
const app = express()
let user = undefined

const PORT = 3001 // порт

app.use(express.static('../WorkObraz'));
app.use('/static', express.static('WorkObraz'));
app.use('/index.css', express.static(__dirname + '/index.css'))
app.use(bodyParser.urlencoded({extended : false})) // собирает данные с боди
app.post('/index', (req,res) => {  
    if(!req.body.number) return res.sendStatus(400) // минимальная проверка формы
    message = {
        to: 'obraz_design.website@mail.ru',
        subject: 'Оставили номер',
        html: `<h2>Новый заказ</h2> 
        <i>Данные заказа</i>
        <p>number: ${req.body.number}</p>`,
       // text: `login: ${req.body.email}  pass ${req.body.pass} `
    }
    mailer(message)
    user = req.body
    res.redirect('/index') // переадресация
})  // отправка страницы клиенту 
app.get('/index', (req,res) => {
    if(typeof user !== 'object') return res.sendFile(__dirname + '/index.html')
        res.sendFile(__dirname + '/application.html') // `Заявка оставлена успешно, данные отправлены на почту` // если всё отправилось перекидываем на страницу с кайфом 
    user = undefined
})

app.listen(PORT, ()=>console.log(`server listening at http://localhost:${PORT}/index`))