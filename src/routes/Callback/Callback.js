import React, {  useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import store from '../../store/store';

const Callback = () => {

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (code && state) {
      store.save("auth", { code, state })
    }
    setTimeout(() => {
      return window.location.replace("/")
    }, 100)
  },[searchParams])

  return (<></>
  );
}

export default Callback