module.exports = (buildSchema) => {
    return {
      userAuthenticationSchema: buildSchema(`
        type loggedUser {
            uid: ID
            password: String
            username: String
            email: String
        }

        type Query {
          loggedUsers(id: ID): [loggedUser]
        }`
      ),
      userAuthenticationQuery: `
        {
          loggedUsers {
            uid
            password
            username
            email
          }
        }`
      }
  };