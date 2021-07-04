import axios from "axios";

// POST
export const addUserAPI = (body) => {
    return new Promise((onSuccess, onFail) => {
      axios
        .post("http://localhost:3000/api/register", body)
        .then((response, error) => {
          if (!response || error) {
            return onFail(`Response failure : ${error}`);
          }
          onSuccess(`user profile successfully created`);
        })
        .catch((err) => onFail(err));
    });
};