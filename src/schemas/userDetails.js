module.exports = (buildSchema) => {
    return {
      userDetailsSchema: buildSchema(`
        type UserDetails {
          udid: ID
          name: String
          surname: String
          address: String
          phone: Int
          email: String
        }

        type Query {
          userDetails(id: ID): [UserDetails]
        }`
      ),
      userDetailsQuery: `
        {
          userDetails {
            name
            surname
            address
            phone
            email
          }
        }`
      }
  };