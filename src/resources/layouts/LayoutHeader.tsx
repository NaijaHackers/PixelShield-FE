import AuthButton from '@components/AuthButton';
import LogoSVG from '@components/LogoSVG';

const LayoutHeader = () => {
    return (
        <div>
            <header className="bg-(--bg-primary-blue) md:px-[99px] px-4 top-0 sticky z-10 border-b border-[#1f2937] h-[100px] flex">
                <div className="flex items-center justify-between my-auto w-full">
                    <div className="flex">
                        <LogoSVG />
                    </div>
                    <div className="flex">
                        Home
                    </div>
                    <AuthButton />
                </div>
            </header>
        </div>
    );
}

export default LayoutHeader;
