module.exports = (buildSchema) => {
    return {
      productsSchema: buildSchema(`
        type Product {
          pid: ID
          name: String
          price: Int
          id_pc: Int
          id_u: Int
        }

        type Query {
          products(id: ID): [Product]
        }`
      ),
      productsQuery: `
        {
          products {
            pid
            name
            price
            id_pc
            id_u
          }
        }`
      }
  };