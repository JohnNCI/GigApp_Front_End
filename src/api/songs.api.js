import axios from "./base";

const getAllSongs = async (query = "") => {
  return await axios.get(`/api/songs?${query}`);
};

export default {
  getAllSongs,
};
