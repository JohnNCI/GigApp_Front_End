const SongCard = ({ song }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="relative">
        <img
          src={song.coverImage ? song.coverImage : "https://media.istockphoto.com/id/1324638796/vector/realistic-vinyl-disc-mockup-in-empty-blank-music-album-cover-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kHlrs3SspeLp7hfoZ9MCZceDoAnnLnnIayFGwznlCAI=" }
          alt={song.title}
          className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-90"
        />
      </div>
      <div className="py-3">
        <h3 className="text-xl font-bold text-black truncate">{song.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{song.artist ? song.artist : "Unknown" }</p>

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