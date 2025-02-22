import { ROUTES } from '@common/routes';
import AuthButton from '@components/AuthButton';
import LogoSVG from '@components/LogoSVG';
import { Link, useLocation } from 'react-router-dom';

const LayoutHeader = () => {

    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <div>
            <header className="bg-(--bg-primary-blue) md:px-[99px] px-4 top-0 sticky z-10 border-b border-[#1f2937] h-[100px] flex">
                <div className="flex items-center justify-between my-auto w-full">
                    <div className="flex">
                        <LogoSVG />
                    </div>
                    {location.pathname !== ROUTES['LANDING_PAGE']['PATH'] ? <div className="flex rounded-full bg-(--secondary-blue) w-max px-5 py-3 gap-4">
                        {[
                            { label: 'Upload', path: ROUTES.UPLOAD_PAGE.PATH },
                            { label: 'My Verifications', path: ROUTES.VERIFICATIONS_PAGE.PATH },
                            { label: 'Integrate', path: ROUTES.INTEGRATE_PAGE.PATH }
                        ].map(({ label, path }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`px-4 py-2 rounded-full transition-all ${isActive(path) ? 'bg-(--primary-sky) text-white' : ''
                                    } hover:bg-(--primary-sky) hover:text-white`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div> : null}
                    <AuthButton />
                </div>
            </header>
        </div>
    );
}

export default LayoutHeader;
