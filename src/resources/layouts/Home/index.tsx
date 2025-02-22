import LayoutHeader from "../LayoutHeader";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-(--primary-blue) w-full h-full flex overflow-hidden text-[#FDFDFD]">
			<div className="w-full h-full overflow-hidden overflow-y-auto isolate flex flex-col">
				<LayoutHeader />
				<div className="flex-grow flex flex-col">
					{children}
				</div>
			</div>
		</div>
	);
}
