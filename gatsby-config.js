module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "First Gatbsy Site",
    description: "A short description",
  },
  plugins: ["gatsby-plugin-netlify-cms", 
  "gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
],
};
