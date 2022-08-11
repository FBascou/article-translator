const path = require("c:/Users/user/Documents/Practice/article-translator/node_modules/papago/dist/index.js");

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};