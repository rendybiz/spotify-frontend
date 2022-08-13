import React, { Component, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import store from '../../store/store';

const Callback = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    console.log("search Params", {code, state})

    if (code && state) {
      store.save("auth", { code, state })
    }
    setTimeout(() => {
      return window.location.replace("/")
    }, 500)
  },[])

  return (<>
    Please wait for redirection</>
  );
}

export default Callback