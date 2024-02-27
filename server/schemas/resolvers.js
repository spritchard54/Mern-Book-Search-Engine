// `resolvers.js`: Define the query and mutation functionality to work with the Mongoose models.

//  **Hint**: Use the functionality in the `user-controller.js` as a guide.

const { Book, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers ={
    Query: {
        user: async () => {
            return await User.findOne({
                _id: user._id
            });
        }

    },

    Mutation: {
        
    }
}