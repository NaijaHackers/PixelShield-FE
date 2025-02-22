import LayoutHeader from "../LayoutHeader";

export default function GuestLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-(--primary-blue) w-full h-full flex overflow-hidden text-[#FDFDFD]">
			<div className="w-full h-full overflow-hidden overflow-y-auto isolate flex flex-col">
				<LayoutHeader />
				<div className="flex-grow">
					{children}
				</div>
			</div>
		</div>
	);
}
