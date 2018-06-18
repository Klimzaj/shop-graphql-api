module.exports = (buildSchema) => {
    return {
      productSchema: buildSchema(`
        type Products {
          pid: ID
          id_pc: Int
          id_u: Int
          name: String
          price: Int
          description: String
          isBought: Boolean
        }

        type Query {
          product(id: ID): [Products]
        }`
      ),
      productQuery: `
        {
          product {
            pid
            id_u
            id_pc
            name
            price
            description
            isBought
          }
        }`
      }
  };