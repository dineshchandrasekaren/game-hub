import axios from "axios";
import { API_URL as baseURL, API_KEY as key } from "../config";

const httpRequest = axios.create({
  baseURL,
  params: { key, page_size: 20 },
});

export default httpRequest;
