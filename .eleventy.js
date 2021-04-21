
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("/src/sass");
    eleventyConfig.addPassthroughCopy("/src/css");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addFilter("randomPost", (arr) => {
        arr.sort(() => {
            return 0.5 - Math.random();
        })
        return arr.slice(0, 1);
    });

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}