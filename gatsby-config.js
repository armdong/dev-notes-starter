module.exports = {
  siteMetadata: {
    title: "Dev Notes Starter",
    subtitle: "build by gatsby",
    description:
      "Development notes build by Gatsby.js!",
    keywords: [
      "react",
      "parcel",
      "hooks",
      "effects",
      "javascript",
      "redux",
      "typescript"
    ]
  },
  pathPrefix: "/dev-notes-starter",
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    }
  ]
};
