import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "4b436c7c-abac-432c-b457-19d4a7bd970b",
  },
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

export const getProfile = (userId = 31889) => {
  return instance.get(`profile/` + userId).then((response) => {
    return response.data;
  });
};

export const getLogin = () => {
  return instance.get(`auth/me`).then((response) => {
    return response.data;
  });
};

export const Follow = (id, follow) => {
  return instance.post(`follow/${id}`, {}).then((response) => {
    if (response.data.resultCode === 0) {
      follow(id);
    }
  });
};

export const Unfollow = (id, unfollow) => {
  return instance.delete(`follow/${id}`, {}).then((response) => {
    if (response.data.resultCode === 0) {
      unfollow(id);
    }
  });
};
