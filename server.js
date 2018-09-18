const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
))

app.get('/',function(req,res){
    res.send('Hello World');
});


app.set('port',3000);
app.listen(app.get('port'),function(){
    console.log('the server is working');
})