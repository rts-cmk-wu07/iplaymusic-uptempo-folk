import { useState } from "react";
import { Link } from "react-router-dom";
import { UseNavigate } from "react-router-dom";

const Previous = () => {
  const navigate = UseNavigate();
  const [hasPrevious, setHasPrevious] = useState(false);

  function PreviousPage() {
    window.history.back();
  }

  return (
    <div>
      {hasPrevious ? (
        <button onClick={() => navigate(-1)}>Previous</button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Previous;
