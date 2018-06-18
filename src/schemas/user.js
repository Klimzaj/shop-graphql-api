module.exports = (buildSchema) => {
    return {
      userSchema: buildSchema(`
        type User {
          uid: ID
          username: String
        }

        type Query {
          user(id: ID): [User]
        }`
      ),
      userQuery: `
        {
          user {
            uid
          }
        }`
      }
  };