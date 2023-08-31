const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user:'zamilovivan2016@gmail.com', //zamilovivan2016@gmail.com obraz_design.website@mail.ru
        pass:'pdvittzuthkgydoj' //pdvittzuthkgydoj gogle                   dWA12dPQie4gPU4UNwqm
    }
}, 
{
    from: 'Obraz <zamilovivan2016@gmail.com>',
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