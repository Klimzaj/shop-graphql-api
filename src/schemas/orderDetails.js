module.exports = (buildSchema) => {
    return {
      orderDetailsSchema: buildSchema(`
        type OrderDetail {
            odid: ID
            id_p: Int
            id_o: Int
            quantity: Int
            price: Int
            date: String
        }

        type Query {
          ordersDetails(id: ID): [OrderDetail]
        }`
      ),
      orderDetailsQuery: `
        {
          ordersDetails {
            odid
            id_p
            id_o
            quantity
            price
            date
          }
        }`
      }
  };