const   express = require('express'),
        app = express(),
        router = express.Router()
        bodyParser = require('body-parser'),
        cors = require('cors')
        sgMail = require('@sendgrid/mail'),
        sql = require('sqlite3').verbose();

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

    let data = sendEmail(req);

    let db = new sql.Database('./db/rsvp_info.db', (err)=>{
        if(err){
            console.log(`We've got the following error: ${err}`);
        };
        console.log("Connected to rsvp_info db");
    })
    db.run(`INSERT INTO rsvp_info (firstName, lastName, email, attending, message, numOfGuests)
            VALUES('${data.firstName}', '${data.lastName}', '${data.email}', '${data.attending}', '${data.message}', '${data.numOfGuests}')`)
    db.close((err)=>{
        if(err){
            console.log(`We've got the following error: ${err}`);
        };
        console.log("Closed connection to rsvp_info db");
    });

    res.send('yep')
})
router.get('/rsvp/db_info',(req,res)=>{
    let db = new sql.Database('./db/rsvp_info.db', (err)=>{
        if(err){
            console.log(`We've got the following error: ${err}`);
        };
        console.log("Connected to rsvp_info db");
    })
    db.all(`SELECT * FROM rsvp_info`, [], (err, rows)=>{
        rows.map(row =>{
            console.log(row)
        })
        res.json({db_info:rows})
    })
    db.close((err)=>{
        if(err){
            console.log(`We've got the following error: ${err}`);
        };
        console.log("Closed connection to rsvp_info db");
    });
})
const sendEmail = (req)=>{
    let data = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        attending:req.body.attending,
        message:req.body.message,
        numOfGuests:req.body.guests
      }
      let {firstName,lastName,attending,numOfGuests, email, message} = data;
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
        <p>${attending?'yes':'no'}</p>
        <h3>Guests:</h3>
        <p>${numOfGuests}</p>
        <h3>Contact-email:</h3>
        <p>${email}<p>`,
      };
      data.attending = data.attending==='yes'?1:0;
      console.log(data);
      sgMail.send(msg)
      .then(()=>{
          console.log('sent successfully')
      });
    return data;
      
}

// db.run(`CREATE TABLE rsvp_info(
//     guest_id INTEGER PRIMARY KEY,
//     firstName TEXT,
//     lastName TEXT,
//     email TEXT,
//     attending INTEGER,
//     message TEXT,
//     numOfGuests INTERGER
//     )`)
module.exports = router;


