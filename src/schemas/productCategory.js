module.exports = (buildSchema) => {
    return {
      productCategorySchema: buildSchema(`
        type ProductCategory {
          pcid: ID
          name: String
        }

        type Query {
          productCategory(id: ID): [ProductCategory]
        }`
      ),
      productCategoryQuery: `
        {
          productCategory {
            pcid
            name
          }
        }`
      }
  };