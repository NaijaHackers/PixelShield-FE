import AuthButton from "@components/AuthButton";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-tahiti w-full h-full flex overflow-hidden">
			<div className="max-w-5xl m-auto bg-[red] w-full h-full overflow-hidden overflow-y-auto">
				<header className="bg-white">
					<AuthButton />
				</header>
				<div className="">
					{children}
				</div>
			</div>
		</div>
	);
}
