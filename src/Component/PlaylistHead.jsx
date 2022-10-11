const PlaylistHead = () => {
  return (
    <section className="relative h-96 z-0">
      <img
        src={FeaturedData[4].linkImg}
        alt={FeaturedData[4].title}
        className="h-full object-cover"
      />
      <div className="-left-3 top-20 absolute">
        {" "}
        <h2 className="text-[48px] ml-10  leading-tight font-extrabold z-20 text-white ">
          {FeaturedData[4].title}
        </h2>
        <h3 className="text-[20px] ml-10 mt-2 leading-tight font-extrabold z-20 text-white absolute">
          {FeaturedData[4].tracks.length} songs
        </h3>
      </div>
    </section>
  );
};

export default PlaylistHead;
