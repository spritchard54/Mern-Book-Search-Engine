// `typeDefs.js`: Define the necessary `Query` and `Mutation` types:

const typeDefs = `
   
   type authorArray {
      authors: [String!]
      descrption: String!
      title: String!
      bookID: String!
      image: String!
      link: String!
   }
   
   type Book {
      boodkId: String!
      authors: [String]
      description: String!
      title: String!
      image: String
      link: String
   }

   type User {
      _id: ID
      username: String
      email: String
      bookCount: Int
      savedBooks: [Book]
     }

   type Auth {
      token: ID!
      user: User
   }

   type Query {
      users: [User]!
      user(userId: ID!): User
      me: User!
     }

   type mutation {
      
      login(email: String!, password: String!): Auth
      
      addUser(username: String!, email: String!, 
      
      password: String!): Auth
  
      saveBook(bookData: authorArray): User
      
      removeBook(userId: ID!, book: String! ): User
     }
`;

module.exports = typeDefs;
