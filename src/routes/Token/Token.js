import React, { Component, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import store from '../../store/store';

const Token = () => {

  const auth =  store.get("auth")

  useEffect(() => {
   console.log("getToken", auth)
  }, [])

  return (<>
    Token</>
  );
}

export default Token