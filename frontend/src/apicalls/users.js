import axiosInstance from ".";

export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/user/register", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/user/login", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.post("/api/user/get-user-info");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
