import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=10";

// Export an object with a "generate" method that generates 10 random employees from the API
export default {
  generate: () =>{
    return axios.get(BASEURL);
  }
}