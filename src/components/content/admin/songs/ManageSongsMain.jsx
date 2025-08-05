import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Edit2, Music, Trash2 } from "feather-icons-react";
import PageHeader from "../../../shared/headers/PageHeader";
import { ADMIN_ADD_SONG_PATH, ADMIN_EDIT_SONG_PATH } from "../../../../constants/routes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../../../config/api";
import coverImage from "../../../../assets/images/card_cover_image.jpg"

const ManageSongsMain = () => {
  const [songs, setSongs] = useState([
    
  ]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  console.log("songs", songs);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/songs`)
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteSong = async (id) => {
    axios
      .delete(`${config.API_URL}/songs/${id}`)
      .then((res) => {
        const filter = songs.filter((song) => song._id !== id);
        setSongs(filter);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <PageHeader title="Manage Question" />
      <div className="overflow-x-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-gray-600 font-medium">
                  Loading songs...
                </span>
              </div>
            </div>
          ) : songs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">
                      Song
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">
                      Artist
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">
                      Genres
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">
                      Venue Types
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {songs.map((song, index) => (
                    <tr
                      key={song._id}
                      className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-50 transition-all duration-200 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md">
                            <img
                              src={song.coverImage ? song.coverImage:coverImage}
                              alt={song.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-md">
                              {song.title}
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">
                            {song.artist}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-2">
                          {song.genres.map((genre, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-100 to-purple-100 text-purple-700 rounded-full text-sm font-medium"
                            >
                              {genre}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-2">
                          {song.venueTypes.map((venue, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-100 to-teal-100 text-green-700 rounded-full text-sm font-medium"
                            >
                              {venue}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => navigate(`/admin/edit-song/${song._id}`)}
                            className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                          >
                            <Edit2 className="w-4 h-4" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteSong(song._id)}
                            className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No songs found
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageSongsMain;
