var MongoClient = require('mongodb'),MongoClient
var url = "mongodb://localhost:27017/myDB"

//(url, option, callBackFunction )
MongoClient.connect(url, {useNewUrlParser: true}, (err, connection) => {
    if (err) throw err
    var dbo = connection.db('myDB')
    dbo.collection("Book").insertOne({
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling'
    })
    connection.close()
})
