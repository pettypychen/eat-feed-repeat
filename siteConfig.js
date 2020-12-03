module.exports = {
  name: 'Eat, Feed, & Repeat',
  shortName: 'Eat, Feed, and Repeat',
  description: "So basically, you are a 🙍🏻‍♀️🙍🏻‍♂️‍ who wants a #bosslife 🙌🏻 and to travel the 🌎🏝 but instead you are raising a 👶🏻. Well, we got ya! 😉 ",
  url: 'https://eatfeedrepeat.com', // Domain of your site without prefix!
  prefix: '/',
  author: 'P Chen',
  twitter: '@pettypychen',
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-YNJ90NJCP9R",
      },
    },
  ],
}
