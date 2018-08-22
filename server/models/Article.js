const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: String,
  text: String,
  description: String,
  img: String, 
  claps: Number, 
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

articleSchema.methods.claps = () => {
  this.claps++;
  return this.save();
};

articleSchema.methods.addAuthor = authorId => {
  this.author = authorId;
  return this.save();
};

articleSchema.methods.getUserArticle = userId => {
  Article.find({ 'author': userId })
         .then(article => article);
};

mongoose.model('Article', articleSchema);