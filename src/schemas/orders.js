module.exports = (buildSchema) => {
    return {
      ordersSchema: buildSchema(`
        type Order {
          oid: ID
          id_u: Int
        }

        type Query {
          orders(id: ID): [Order]
        }`
      ),
      ordersQuery: `
        {
          orders {
            oid
            id_u
          }
        }`
      }
  };