const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.com',
    port: 465,
    secure: true,
    auth:{
        user:'obraz_design.website@mail.ru', //zamilovivan2016@gmail.com obraz_design.website@mail.ru
        pass:'94cEv8UwBJPA4aznguYf' //pdvittzuthkgydoj gogle                   dWA12dPQie4gPU4UNwqm
    } 
}, 
{
    from: 'Obraz <obraz_design.website@mail.ru>',
})


transporter.verify((error, success) =>{
    error ? console.log(error) :
        console.log('sever is ready to take our messages: ', success)
})
const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('email sand: ', info)
    })
}

module.exports = mailer 