import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "4b436c7c-abac-432c-b457-19d4a7bd970b",
  },
});
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },
  me() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  follow(id) {
    return instance.post(`follow/${id}`);
    // .then((response) => {
    //   if (response.data.resultCode === 0) {
    //     follow(id);
    //   }
    // });
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`);
    // .then((response) => {
    //   if (response.data.resultCode === 0) {
    //     unfollow(id);
    //   }
    // });
  },
};
