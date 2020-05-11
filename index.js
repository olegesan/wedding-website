const   express = require('express'),
        cors = require('cors'),
        bodyParser = require('body-parser'),
        app = express();
        email = require('./routes/email.js');
        path = require('path')

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));



app.use('/emails',email)



// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })


app.listen(port, ()=>{
    console.log("Server is running on "+port);
    console.log(process.env.TWILLOAPIKEY)
})
