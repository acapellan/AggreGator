const keys = {
  google: {
    id: process.env.GOOGLE_ID,
    secret: process.env.GOOGLE_SECRET
  },
  mongoURI: process.env.MONGO_URI,
  cookieKeys: [
    process.env.COOKIE_KEY_1,
    process.env.COOKIE_KEY_2,
    process.env.COOKIE_KEY_3,
    process.env.COOKIE_KEY_4
  ]
};

module.exports = keys;
