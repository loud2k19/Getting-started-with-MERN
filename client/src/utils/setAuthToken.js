import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //set headers in the token
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.defaults.common["x-auth-token"];
  }
};
export default setAuthToken;
