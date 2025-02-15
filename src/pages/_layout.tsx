import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";

export default function _layout({ children }: { children: React.ReactNode }) {
	const { ready, authenticated, login, logout } = usePrivy();
	return (
		<div className="bg-tahiti">
			<header className="bg-white">
				{ready && authenticated ? (
					<div>
						<Button
							onClick={logout}
							style={{
								marginTop: "20px",
								padding: "12px",
								backgroundColor: "#3f3cbb",
								color: "#FFF",
								border: "none",
								borderRadius: "6px",
							}}
						>
							Log Out
						</Button>
					</div>
				) : (
					<Button
						onClick={login}
						style={{
							padding: "12px",
							backgroundColor: "#3f3cbb",
							color: "#FFF",
							border: "none",
							borderRadius: "6px",
						}}
					>
						Log In
					</Button>
				)}
			</header>
			{children}
		</div>
	);
}
