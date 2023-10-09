import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { user, googleLogin, githubLogin } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        swal("Good job!", "user logged in successfully", "success");
        navigate("/");
      })
      .catch((error) => {
        swal("Error!", " please login again!", "error");
      });
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="text-center flex gap-5 ">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-neutral bg-slate-200 text-black hover:text-white btn-sm"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-neutral bg-slate-200 text-black hover:text-white btn-sm"
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
