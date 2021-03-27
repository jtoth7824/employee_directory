import axios from "axios";

// Export an object containing methods we'll use for accessing the employees

export default {

  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  }
};
