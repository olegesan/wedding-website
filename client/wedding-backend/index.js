const   express = require('express'),
        cors = require('cors'),
        bodyParser = require('body-parser'),
        app = express();
        email = require('./routes/email.js');

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/emails',email)

app.get('/', (req,res)=>{
    res.send("hello")
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })

app.listen(port, ()=>{
    console.log("Server is running on "+port);
})
