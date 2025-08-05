import axios from "axios";
import { useEffect, useState } from "react";
import SongCard from "../shared/cards/SongCard";
import config from "../../config/api";
import AddSongsToGigModal from "../shared/modals/AddSongsToGigModal";

const HomeMain = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/songs`)
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleSelect = (id) => {
    setSelectedSongs((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <p>{songs.length} songs</p>
        {selectedSongs.length > 0 ? (
          <button
            className="bg-purple-500 px-6 py-3 rounded-lg text-white hover:bg-purple-700 hover:cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Add to Gig ({selectedSongs.length})
          </button>
        ) : null}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {songs.map((song) => (
          <SongCard
            key={song._id}
            song={song}
            selectedSongs={selectedSongs}
            onToggleSelect={toggleSelect}
          />
        ))}
      </div>
      <AddSongsToGigModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add Songs to Gig"
        selectedSongs={selectedSongs}
      />
    </>
  );
};

export default HomeMain;
