import { Link, useNavigate } from "react-router-dom";

export default function NewReleases({ image, album, artist, id, songs }) {
  const navigate = useNavigate();
  return (

    <article className="album" onClick={() => navigate(`/albumDetails/${id}`)}>

      <img src={image} className="albumImg" />
      
      <div className="pt-10 pl-2">
        <h2 className="font-bold dark:text-white">{album}</h2>
        <p className="dark:text-white">{artist}</p>
      </div>

      <div className="font-bold dark:text-white pt-8 pl-3">{songs} songs</div>
    </article>
  );
}
