import { useDispatch } from "react-redux";
import { loginRequest } from "../actions/userActions";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(loginRequest());
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;
