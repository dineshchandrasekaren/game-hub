import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "246e58ffadea4809b45536d203e02067",
  },
});
