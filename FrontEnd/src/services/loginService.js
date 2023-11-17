import axios from "axios";
import axiosInstance from "./axiosService";

class LoginService {
  getServices() {
    //TODO: ferch data from server

    //temp. return mock data
    return [
      {
        id: "1234532",
        username: "LebronJames",
        email: "na@yahoo.com",
        first_name: "Lebron",
        last_name: "James",
        age: "",
      },
      {
        id: "1234532",
        username: "MikeTyson",
        email: "Mike@yahoo.com",
        first_name: "Mike",
        last_name: "Tyson",
        age: "",
      },
      {
        id: "1234532",
        username: "JamesHarden",
        email: "Harden@yahoo.com",
        first_name: "James",
        last_name: "Harden",
        age: "",
      },
    ];
  }

  async login(username, password) {
    let response = await axios.post("http://127.0.0.1:8000/api/auth/token/ ", {
      username,
      password,
    });
    return response.data;
  }

  async myInfo() {

    let response = await axiosInstance.get(
      "/api/users/me",
    );
    console.log(response.data)
    return response.data;
  }
}

export default LoginService;
