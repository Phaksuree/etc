const { ApolloServer, gql } = require('apollo-server')

const books = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    published_time: '2010-10-10'
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    published_time: '2009-9-9'
  },
  {
    id: 3,
    title: 'Jurassic Park2',
    author: 'Michael Crichton2',
    published_time: '2009-11-10'
  },
]
//2 ส่วน typedef,resolver
//เราจะมีไรบ้างอยุ่ข้างใน คืนให้ทั้งหมด
//คิสวี่ หาข้อมูล มิวเทชั่น เปลี่ยนแปลง
const typeDefs = gql`
  type Book {
    id: Int
    title: String
    author: String
    published_time: String!
  }

  type Query {
    books: [Book]
    book(id: Int!): Book
    numbook: Int
  }
`
//ควบคุมค่าที่ต้องส่งคืน
const resolvers = {
  Query: {
    books: () => books,
    book: (_, parameter) => books[ parameter.id - 1 ],
    numbook: () => books.length,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})