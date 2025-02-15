import { usePrivy } from "@privy-io/react-auth";
import { redirect } from "react-router-dom";
export default function AuthHOC({ children }: { children: React.ReactNode }) {
	const { ready, authenticated, user, login, logout } = usePrivy();

	if (!ready) {
		return null;
	}
	console.log({ user });
	
	if(!user){
		redirect("/login");
	}

	return (
		<div className="bg-tahiti">
			<div>{ready && authenticated && <div>{children}</div>}</div>
		</div>
	);
}
