import CoverImageEmpty from "../../../assets/images/card_cover_image.jpg";
import CheckIcon from "../../../assets/icons/check.svg";
import UnCheckIcon from "../../../assets/icons/un-check.svg";

const SongCard = ({ song, selectedSongs, onToggleSelect }) => {
  return (
    <div className="flex items-center relative bg-white border border-gray-200 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
      {/* Checkbox top-right */}
      <div className="absolute top-2 left-2 z-10">
        {selectedSongs.includes(song._id) ? (
          <img src={CheckIcon} onClick={() => onToggleSelect(song._id)} />
        ) : (
          <img src={UnCheckIcon} onClick={() => onToggleSelect(song._id)} />
        )}
      </div>
      <div className="relative">
        <img
          src={song.coverImage ? song.coverImage : CoverImageEmpty}
          alt={song.title}
          className="w-20 h-20 object-cover transition-opacity duration-300 hover:opacity-90"
        />
      </div>
      <div className="p-3">
        <h3 className="text-xl font-bold text-black truncate">{song.title}</h3>
        <p className="text-gray-600 text-sm mt-1">
          {song.artist ? song.artist : "Unknown"}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {song.genres.map((g, idx) => (
            <span
              key={idx}
              className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded-full transition-colors duration-200 hover:bg-purple-200"
            >
              {g}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {song.venueTypes.map((v, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full transition-colors duration-200 hover:bg-gray-200"
            >
              {v}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongCard;
