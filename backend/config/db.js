const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Successfully connected to database"))
    .catch(() => console.log("Failed to connected to database"));
}

mongoose.set('toJSON', {
  virtuals: true,
  transform: (doc, converted) => {
    delete converted._id;
    delete converted.__v;
  },
  
});