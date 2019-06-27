import axios from "axios";
export default async function requestData(url) {
  let response;
  try {
    response = await axios(url);
    return response;
  } catch (err) {
    return response;
  }
}
