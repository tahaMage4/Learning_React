import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1fyakV5XADIhA8V-H4m1OqsWm9v11vCDZA_BbcmFTwU",
  },
});
