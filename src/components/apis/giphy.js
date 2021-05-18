import axios from "axios";

const KEY = "iqACHRzsD9VjuzLVduPKLshxOAHUEbGE";

export default axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: KEY,
    limit: 5,
  },
});
