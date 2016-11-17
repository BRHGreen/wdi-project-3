module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || 'mongodb://localhost/good-vibes',
  secret: process.env.SECRET || "totally secret... yeah..."
};
