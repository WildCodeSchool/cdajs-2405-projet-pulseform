import { useState } from "react";
import UserInfoAddView from "./components/UserInfoAddView";

function SignUpPage() {
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
			{isStepSignUp && <UserInfoAddView />}
		</>
	);
}

export default SignUpPage;
