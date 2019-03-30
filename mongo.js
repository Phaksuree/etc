const {ApolloServer, gql} = require('apollo-server')

var MongoClient = require('mongodb').MongoClient
var mongoUrl = "mongodb://localhost:27017/myDB"

MongoClient.connect(mongoUrl, {useNewUrlParser: true}, (err, connection) => {
  var dbo = connection.db("myDB")

  const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
  
  type Mutation {
    book_add(title: String!, author: String!): Boolean!
  }
`

  const resolvers = {
    Query: {
      books: () => dbo.collection("Book").find({}).toArray()
    },
    Mutation: {
      book_add: async (_, {title, author}) => {
        dbo.collection("Book").insertOne({title, author})
        return true
      }
    }
  }

  const server = new ApolloServer({typeDefs, resolvers})

  server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
  })
})