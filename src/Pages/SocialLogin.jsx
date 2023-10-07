import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
  const { user, googleLogin } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="text-center">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-neutral btn-sm"
        >
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
