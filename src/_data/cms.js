const axios = require("axios");

module.exports = async () => {
    const { data } = await axios.get("https://my-json-server.typicode.com/typicode/demo/posts");

    return data.slice(0, 3);
}