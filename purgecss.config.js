module.exports = {
  content: ["./src/index.html"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};
