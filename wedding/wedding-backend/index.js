const   express = require('express'),
        cors = require('cors'),
        bodyParser = require('body-parser'),
        app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("hello")
})

app.listen(port, ()=>{
    console.log("Server is running on "+port);
})
