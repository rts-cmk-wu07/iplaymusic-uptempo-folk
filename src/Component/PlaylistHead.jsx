const PlaylistHead = ( { playlist } ) => {
  return (
    <section className="relative h-96 z-0">
      <img
        src={playlist.images[0].url}
        alt={playlist.name}
        className="h-full object-cover"
      />
      <div className="-left-3 top-20 absolute">
        {" "}
        <h2 className="text-[48px] ml-10  leading-tight font-extrabold z-20 text-white ">
          {playlist.name}
        </h2>
        <h3 className="text-[20px] ml-10 mt-2 leading-tight font-extrabold z-20 text-white absolute">
          {/* {FeaturedData[4].tracks.length} songs */}
        </h3>
      </div>
    </section>
  );
};

export default PlaylistHead;
