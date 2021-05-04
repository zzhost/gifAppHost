import axios from "axios";

const KEY = "YOUR_PUBLIC_API_KEY_STORED_IN_USER_BROWSER";

export default axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: KEY,
    limit: 5,
  },
});
