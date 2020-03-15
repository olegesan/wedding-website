const   express = require('express'),
        app = express(),
        router = express.Router()
        bodyParser = require('body-parser'),
        cors = require('cors')
        sgMail = require('@sendgrid/mail'),
        sql = require('sqlite3')

sgMail.setApiKey('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');

app.use(cors());
app.use(express.json())


router.use(function timeLog (req, res, next) {
    console.log('Time: ', new Date(Date.now()))
    next()
    })
router.get('/', (req,res)=>{
    res.send('This is a URL to send emails, use POST method')
})
router.post('/', (req,res)=>{
    res.json({
        message:'hello Ruben'
    })
})
router.post('/rsvp', (req,res)=>{
    let data = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        attending:req.body.attending,
        message:req.body.message,
        numOfGuests:req.body.guests
      }
      let {firstName,lastName,attending,numOfGuests, email, message} = data
      const msg = {
        to: 'olegesan@gmail.com',
        from: 'rsvp@wedding.io',
        subject: `RSVP form for On'M wedding at ${new Date(Date.now())}`,
        // text: `${name} and easy to do anywhere, even with Node.js ${message}`,
        html: `<h2>RSVP form for On'M wedding</h2>\
        <h3 style={'font-weight':"700"}>Text:</h3>\
        <p>${message}</p>
        <h3>From:</h3>
        <p>${firstName} ${lastName}</p>
        <h3>Attending:</h3>
        <p>${attending?'Yes':'No'}</p>
        <h3>Guests:</h3>
        <p>${numOfGuests}</p>
        <h3>Contact-email:</h3>
        <p>${email}<p>`,
      };
      console.log(data)
      sgMail.send(msg)
      .then(()=>{
          res.send('Hello there')
      })
})
module.exports = router;


