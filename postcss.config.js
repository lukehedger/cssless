const purgecss = require("@fullhuman/postcss-purgecss");
const tailwindcss = require("tailwindcss");

const plugins = [tailwindcss];

if (process.env.NODE_ENV === "production") {
  plugins.push(
    purgecss({
      content: ["./src/index.html", "./src/index.js"],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  );
}

module.exports = {
  plugins: plugins
};
