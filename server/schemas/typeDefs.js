// `typeDefs.js`: Define the necessary `Query` and `Mutation` types:

const typeDefs = `
   type Query {
    user: [User]!
    user(userId: ID!): User
    me: User
   }

   #This input is used in the saveBook mutation, but is it used correctly?
   
   input authorArray {
    authors: [String!]
    descrption: String!
    title: String!
    bookID: String!
    image: String!
    link: String!
   }
   
   type mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    saveBook(bookData: authorArray): User
    removeBook(bookID: String! ): User
   }

   type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
   }

   type Book {
    boodkId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
   }

   type Auth {
    token: ID!
    User: User
   }
`;

module.exports - typeDefs;
