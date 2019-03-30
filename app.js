var express = require('express')
var app = express()

/*app.get('/',(req,res) => {
    res.send(`${
        parseInt(req.query.vul1) +
        parseInt(req.query.vul2)
    }`)
})*/
/*
app.get('/say',(req,res) => {
    res.send(req.query.message)
})*/

app.get('/multi',(req,res) => {
    res.send(`${
        parseInt(req.query.vul1) *
        parseInt(req.query.vul2)
    }`)
})
const books = [
    {id: 1, title: 'Book1'},
    {id: 2, title: 'Book2'},
    {id: 3, title: 'Book3'},
    {id: 4, title: 'Book4'}
]
app.get('/books',(req,res) => {
    if ( req.query.id !== undefined) {
        res.send(books[req.query.id].title)
    }
    else {
        res.send(({title}) => title).join(' ')
    }
    
})



app.listen(8081)

//app.get(path, callBackFunction)


//ex callbackfunction
/*function say(message, callBackFunction)
{
    console.log(message)
    callBackFunction()
}

function bye(){
    console.log('bye')
}

say('hi',bye)*/