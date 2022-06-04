import axios from "axios";

const Service = {
  //Fetch All expenses
  getAllExpeses: async (url) => {
    let res;
    await axios
      .get(url)
      .then((response) => {
        res = response.data;
      })
      .catch((err) => {
        res = err;
        console.log("Error");
      });
    return res;
  },

  //Fetch expense by ID
  getExpenseById: async (url, id) => {
    let res;
    await axios
      .get(url + id)
      .then((response) => {
        res = response.data;
      })
      .catch((err) => {
        res = err;
        console.log("Error");
      });
    return res;
  },

  //Save an expense
  saveExpense: async (url, payload) => {
    let res;
    await axios
      .post(url, payload)
      .then((response) => {
        res = response;
        console.log("Save Successfull");
      })
      .catch((err) => {
        res = err;
        console.log("Error");
      });
    return res;
  },

  //Update an expense
  updateExpenseMethod: async (url, payload) => {
    let res;
    await axios
      .put(url, payload)
      .then((response) => {
        res = response;
        console.log("Update Successfull");
      })
      .catch((err) => {
        res = err;
        console.log("Error");
      });
    return res;
  },
};

export default Service;
