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
router.post('/rsvp', async function handler(req,res){

    let data = await sendEmail(req);
    if (data === 'error'){
        res.status(500).send('something went terribly wrong');
        console.log('couldnt send those emails')
        return;
    }
    let db =  await handleDbConnect()
    
    console.log(db)
    let add_to_db_err;
    db.run(`INSERT INTO rsvp_info (firstName, lastName, email, attending, message, numOfGuests)
            VALUES('${data.firstName}', '${data.lastName}', '${data.email}', '${data.attending}', '${data.message}', '${data.numOfGuests}')`,[], async (err)=>{
                if(err){
                    console.log('we encountered an error');
                    console.log(err)
                    add_to_db_err = true;
                    // res.status(500).send('something went terribly wrong')
                }else{
                    add_to_db_err = false;
                }
                console.log(add_to_db_err)
            })
    await new Promise((res,rej)=>{setTimeout(res,1000)});
    console.log(add_to_db_err)
    let closeDb = await handleDbClose(db)
    if(closeDb==200 && !add_to_db_err){
        res.status(200).send('we added your info to the DB');
    }else{
        res.status(500).send('something went terribly wrong')
        console.log('did not add info to DB')
    };

    
})
router.get('/rsvp/db_info', async (req,res)=>{
    let db = await handleDbConnect();
    db.all(`SELECT * FROM rsvp_info`, [], (err, rows)=>{
        rows.map(row =>{
            console.log(row)
        })
        res.json({db_info:rows})
    })
    handleDbClose(db)
})
router.get('/rsvp/db_info/:email',async (req,res)=>{
    let email = req.params.email;

    let db = await handleDbConnect();
    if(email==='all'){
        db.run(`DELETE FROM rsvp_info`, [], (err)=>{
            if(err){
                console.log(err)
            }
        }) 
    }else{
        db.run(`DELETE FROM rsvp_info WHERE email='${email}'`, [], (err)=>{
            if(err){
                console.log(err)
            }
        })
    }
   handleDbClose(db);
    res.redirect('/emails/rsvp/db_info')
})
async function sendEmail(req){
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
      return data
    //   let output = await sgMail.send(msg)
    //   .then(()=>{
    //       console.log('sent successfully')
    //       return data;
    //   })
    //   .catch(err=>{
    //       console.log(err)
    //       return 'error'
    //   })
    //   return output;
        
    
      
}
async function handleDbClose(db){
    return new Promise(async (resolve,reject) =>{
        let error;
        await db.close(err=>{
            if(err){
                console.log(`We've got the following error: ${err}`);
                error = true;
            }else{
                error = false;
                console.log("Closed connection to rsvp_info db");
            } 
        })
        error? reject(500):resolve(200);
        

    })

}
async function handleDbConnect(){
     
    return new Promise((res,rej)=>{
        let db = new sql.Database('./db/rsvp_info.db',(err)=>{
                if(err){
                    console.error(`We've got the following error: ${err}`);
                    return 'error'
                };
                console.log("Connected to rsvp_info db")

            })
            res(db)
            
    });
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


