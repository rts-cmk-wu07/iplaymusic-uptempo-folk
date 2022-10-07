import { Link, useNavigate } from "react-router-dom";

export default function FeaturedCard({ image, album, genre, id }) {
  const navigate = useNavigate();
  return (
    <article
      className="featuredCard"
      onClick={() => navigate(`/playlist/${id}`)}
      shadow-lg
      shadow-black
    >
      <div className="featured-card m-auto rounded-md shadow-lg shadow-black">
        <img
          src={image}
          className=" m-auto w-[310px] h-[500px] mt-10 rounded-md shadow-lg"
          alt=""
        />
        <div>
          <p className="featuredText absolute text-3xl font-extrabold text-white top-3/4 left-1/2 -translate-x-2/3 -translate-y-1/3 ">
            <Link to={`/playlist/${id}`}>{album}</Link>
          </p>
          {/* <p className="featuredText absolute text-xl font-extrabold text-white top-4/5 left-1/2 -translate-x-2/3 -translate-y-2/3 ">
					{genre}
				</p> */}
        </div>
      </div>
    </article>
  );
}
