// `resolvers.js`: Define the query and mutation functionality to work with the Mongoose models.

//  **Hint**: Use the functionality in the `user-controller.js` as a guide.

const { Book, User } = require("../models");
// const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    // 1. get a single user by either their id or their username
    user: async () => {
      return await user.findOne({
        _id: user._id,
      });
    },
  },

  Mutation: {
    // 1. Create User
    user: async (parent, { username }) => {
      return user.create({ username });
    },
    // 2. Savea book to `savedBooks`
    saveBook: async (parent, { user, book }) => {
      return user.findOneAndUpdate(
        {
          _id: userId,
        },
        {
          $addToSet: { savedBooks: [Book] },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    // 3. Remove a book from `savedBooks`
    removeBook: async (parent, { userId, book }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedBooks: book } },
        { new: true }
      );
    },
  },
    // 2. login a user, sign a token, and send it back (to client/src/components/LoginForm.js) // {body} is destructured req.body
    login: async (parent, {email, password}) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw AuthenticationError;
        }
        
        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw AuthenticationError;
        }

        const token =signToken(user);
        return { token, user }
    }

};

module.exports = resolvers;
