

import React from 'react';
import { KakaoLoginButton } from 'react-kakao-login';

const KakaoLogin = () => {
  const responseKaKao = (response) => {
    console.log(response); // Handle the Kakao login response
  };

  return (
    <KakaoLoginButton
      token={`${process.env.REACT_APP_KAKAO_API_KEY}`}
      onSuccess={responseKaKao}
      onFail={console.error}
      onLogout={console.info}
    />
  );
};

export default KakaoLogin;