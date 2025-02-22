import { usePrivy } from '@privy-io/react-auth';
import AnimatedButton from './AnimatedButton';

const AuthButton = () => {
    const { ready, authenticated, login, logout, isModalOpen } = usePrivy();

    // Define button properties dynamically
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
        <div className="flex">
            <AnimatedButton
                isLoading={!ready || isModalOpen}
                onClick={buttonAction}
                style={style}
                label={buttonText}
            />
        </div>
    );
};

export default AuthButton;
