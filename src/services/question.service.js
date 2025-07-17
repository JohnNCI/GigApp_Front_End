import ApiIndex from "../api";

const songsService = () => ({
  getAllSongs: (query) => ApiIndex.SongsApi.getAllSongs(query),
});

export default songsService;
