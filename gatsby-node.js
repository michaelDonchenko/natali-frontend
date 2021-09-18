const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const categoryTemplate = path.resolve("src/templates/categoryTemplate.js")
  const recipeTemplate = path.resolve("src/templates/recipeTemplate.js")
  const recipesTemplate = path.resolve("src/templates/recipesTemplate.js")

  const { data: categories } = await graphql(`
    {
      allStrapiCategory {
        nodes {
          strapiId
          title
        }
      }
    }
  `)

  const { data: recipes } = await graphql(`
    {
      allStrapiRecipe {
        nodes {
          title
          strapiId
        }
      }
    }
  `)

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: recipes.allStrapiRecipe.nodes, // An array of objects
    itemsPerPage: 8, // How many items you want per page
    pathPrefix: "/recipes", // Creates pages like `/blog`, `/blog/2`, etc
    component: recipesTemplate, // Just like `createPage()`
  })

  categories.allStrapiCategory.nodes.forEach(category => {
    createPage({
      path: `/category/${category.strapiId}`,
      component: categoryTemplate,
      context: {
        title: category.title,
      },
    })
  })

  recipes.allStrapiRecipe.nodes.forEach(recipe => {
    createPage({
      path: `/recipe/${recipe.strapiId}`,
      component: recipeTemplate,
      context: {
        title: recipe.title,
      },
    })
  })
}
