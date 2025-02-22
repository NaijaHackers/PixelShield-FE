import AuthButton from "@components/AuthButton";
import LogoSVG from "@components/LogoSVG";

export default function GuestLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-(--primary-blue) w-full h-full flex overflow-hidden text-white">
			<div className="w-full h-full overflow-hidden overflow-y-auto isolate flex flex-col">
				<header className="bg-(--bg-primary-blue) px-[99px] top-0 sticky z-10 border-b border-[#1f2937]">
					<div className="flex items-center justify-between">
						<div className="flex">
							<LogoSVG />
						</div>
						<AuthButton />
					</div>
				</header>
				<div className="flex-grow">
					{children}
				</div>
			</div>
		</div>
	);
}
