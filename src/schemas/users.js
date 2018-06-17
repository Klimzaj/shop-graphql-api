module.exports = (buildSchema) => {
    return {
      usersSchema: buildSchema(`
        type User {
          uid: ID
          username: String
        }

        type Query {
          users(id: ID): [User]
        }`
      ),
      usersQuery: `
        {
          users {
            uid
            username
          }
        }`
      }
  };