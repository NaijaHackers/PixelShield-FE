import { usePrivy } from '@privy-io/react-auth';
import AnimatedButton from './AnimatedButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@common/routes';

const AuthButton = () => {
    const { ready, authenticated, login, logout, isModalOpen } = usePrivy();
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const buttonText = authenticated ? 'Log Out' : 'Log In';
    const buttonAction = authenticated ? logout : login;

    const style = {
        gap: 10,
        borderRadius: 12,
        padding: 10,
        borderWidth: 1,
        background: 'transparent',
        width: 189,
        borderColor: 'var(--primary-sky)',
    };

    return (
        <div className="flex items-center gap-4">
            <AnimatedButton
                isLoading={!ready || isModalOpen}
                onClick={buttonAction}
                style={style}
                label={buttonText}
            />
            {
                (authenticated && pathname == ROUTES['LANDING_PAGE']['PATH']) && (
                    <AnimatedButton
                        label={'Use App'}
                        onClick={() => {
                            navigate(ROUTES['USER_HOMEPAGE']['PATH'])
                        }}
                    // style={{ borderRadius:12 }}
                    />
                )
            }
        </div>
    );
};

export default AuthButton;
