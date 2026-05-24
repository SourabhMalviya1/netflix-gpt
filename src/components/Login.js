import Header from "./Header";
import { useRef, useState } from "react";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = (e) => {
    const errorMessage = checkValidData(
      email.current.value,
      password.current.value,
      name.current?.value,
    );
    setErrorMessage(errorMessage);
    if (errorMessage) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          // const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current?.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName }),
              );
            })
            .catch((error) => {
              setErrorMessage(error.code + ": " + error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77c412a9-62ea-48a0-a5ee-466e11e851d5/web/IN-en-20260511-TRIFECTA-perspective_f0af4f75-4cc5-42bd-b0c5-2b65b8b50e03_small.jpg"
          alt="Netflix Logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="text-white w-4/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0
      rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-600"
        />

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-4 my-2 w-full bg-gray-600"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-600"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          type="submit"
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
