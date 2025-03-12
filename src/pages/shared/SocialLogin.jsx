import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex justify-center items-center mb-6">
        <button onClick={handleGoogleSignIn} className="btn btn-warning">
          Google Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
