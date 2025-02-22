import { usePrivy } from '@privy-io/react-auth';
import AnimatedButton from './AnimatedButton';

const AuthButton = () => {

    const { ready, authenticated, login, logout, isModalOpen, } = usePrivy();

    const style = {
        gap: 10,
        borderRadius: 12,
        padding: 10,
        borderWidth: 1,
        background: 'transparent',
        width: 189
    }

    return (
        <div className='flex'>
            {ready && authenticated ? (
                <AnimatedButton
                    isLoading={isModalOpen}
                    onClick={logout}
                    style={style}
                    label='Log Out'
                />
            ) : (
                <AnimatedButton
                    isLoading={isModalOpen}
                    onClick={login}
                    style={style}
                    label='Log In' />
            )}
        </div>
    );
}

export default AuthButton;
