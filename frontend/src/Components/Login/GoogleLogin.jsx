import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { googleAuth } from "./api";

const GoogleLogin = () => {
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        const result = await googleAuth(authResult.code);
        const { email, name, image } = result.data.user;
        const token = result.data.token;
        const userObj = { email, name, token, image };
        localStorage.setItem("user-info", JSON.stringify(userObj));
        navigate("/dashboard");
      } else {
        console.error("Google login failed:", authResult);
      }
    } catch (error) {
      console.error("Error while Google Login...", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (error) => console.error("Google Login Error:", error),
    flow: "auth-code",
  });

  return (
    <div className="App">
      <button onClick={googleLogin}>Sign in with Google</button>
    </div>
  );
};

export default GoogleLogin;
