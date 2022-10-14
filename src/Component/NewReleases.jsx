import { Link, useNavigate } from "react-router-dom";

export default function NewReleases({ image, album, artists, id, songs }) {
  const navigate = useNavigate();
  return (
    <article className="album">
      <img
        src={image}
        className="albumImg"
        onClick={() => navigate(`/albumDetails/${id}`)}
      />

      <div className="pt-10 pl-2">
        <h2
          className="font-bold dark:text-white"
          onClick={() => navigate(`/albumDetails/${id}`)}
        >
          {album}
        </h2>
        <p className="dark:text-white">
          {artists?.map((item, index) =>
            index + 1 === artists.length ? (
              <span key={index} onClick={() => navigate(`/artist/${item.id}`)}>
                {item.name}{" "}
              </span>
            ) : (
              <span key={index} onClick={() => navigate(`/artist/${item.id}`)}>
                {item.name},{" "}
              </span>
            )
          )}
        </p>
      </div>

      <div className="font-bold dark:text-white pt-8 pl-3">{songs} song(s)</div>
    </article>
  );
}
