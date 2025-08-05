import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateGigModal from "../../shared/modals/CreateGigModal";

const MyGigsMain = () => {
  const [gigs, setGigs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/gigs")
      .then((res) => {
        setGigs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">My Gigs</h1>
        <button
          className="bg-purple-500 px-6 py-3 rounded-lg text-white hover:bg-purple-700 hover:cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          Create Gig
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gigs.map((gig) => (
          <div
            key={gig._id}
            className="border p-5 rounded-lg border-gray-300 hover:border-purple-600 hover:cursor-pointer"
            onClick={() => navigate(`/my-gigs/${gig._id}/songs`)}
          >
            <h1 className="text-lg font-bold">{gig.name}</h1>
            <p className="text-gray-400">{gig.venueType}</p>
            <p className="text-sm text-purple-500">
              No of songs: {gig.songs.length}
            </p>
          </div>
        ))}
      </div>
      <CreateGigModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Create Gig"
        setGigs={setGigs}
      />
    </>
  );
};

export default MyGigsMain;
