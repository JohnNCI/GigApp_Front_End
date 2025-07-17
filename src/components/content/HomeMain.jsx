import React, { useEffect, useState } from "react";
import SongCard from "../shared/cards/SongCard";
import axios from "axios";

const HomeMain = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/songs")
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {songs.map((song, idx) => (
        <SongCard key={idx} song={song} />
      ))}
    </div>
  );
};

export default HomeMain;
