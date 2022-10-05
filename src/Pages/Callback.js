import axios from "axios";

import { useContext, useEffect } from "react";

import TokenContext from "../Contexts/TokenContext";

import { navigate } from "@reach/router";

import { useSearchParams } from "react-router-dom";

import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Callback(props) {
  var [Token, setToken] = useContext(TokenContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const code = searchParams.get("code");

  const navigate = useNavigate();

  // var code = new URLSearchParams(props.location.search).get("code");

  useEffect(
    function () {
      axios
        .post(
          "/.netlify/functions/token",
          JSON.stringify({
            code,
          })
        )

        .then((response) => {
          var d = new Date();

          d.setSeconds(d.getSeconds() + response.data.expires_in - 2);
          console.log(response);

          response.data.expires_in = d.valueOf();
          setToken(response.data);

          navigate("/featured");
        });
    },
    [setToken, code]
  );

  return null;
}
