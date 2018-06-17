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
        }

        type Query {
          product(id: ID): [Products]
        }`
      ),
      productQuery: `
        {
          product {
            pid
            name
            price
            description
          }
        }`
      }
  };