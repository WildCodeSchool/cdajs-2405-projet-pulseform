import { useState } from "react";
import SignUpStep1 from "./components/SignUpStep1";

function SignUp() {
  const [isStepSignUp, setIsStepSignUp] = useState(false);

  function onSignUp() {
    setIsStepSignUp(true);
  }

  return (
    <>
      {!isStepSignUp && (
        <button type="submit" onClick={onSignUp}>
          Sign Up
        </button>
      )}
      {isStepSignUp && <SignUpStep1 />}
    </>
  );
}

export default SignUp;
