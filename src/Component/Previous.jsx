import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const Previous = () => {
  const navigate = useNavigate();
  const [hasPrevious, setHasPrevious] = useState(false);

  function PreviousPage() {
    window.history.back();
  }

  return (
    <div>
      <button
        className="text-black dark:text-white flex py-7 px-6 mt-auto"
        onClick={() => navigate(-1)}
      >
        <IoChevronBack color="black dark:white" size="30" />
      </button>
    </div>
  );
};

export default Previous;
