import React, { Component, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import store from '../../store/store';

const Callback = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();

  const code = searchParams.get("code");
  const state = searchParams.get("state");

  useEffect(() => {
    // console.log("search Params", {code, state})
    if (code && state) {
      store.save("auth", { code, state })
    }
    setTimeout(() => {
      return navigate("/")
    }, 500)
  }, searchParams)

  return (<>
    Callback</>
  );
}

export default Callback