import { usePrivy } from '@privy-io/react-auth';
import AnimatedButton from './AnimatedButton';

const AuthButton = () => {

    const { ready, authenticated, login, logout, isModalOpen,  } = usePrivy();

    return (
        <div className='bg-purple-600 p-5'>
            {ready && authenticated ? (
                <div>
                    <AnimatedButton
                        isLoading={isModalOpen}
                        onClick={logout}
                    >
                        Log Out
                    </AnimatedButton>
                </div>
            ) : (
                <AnimatedButton
                    isLoading={isModalOpen}
                    onClick={login} >
                    Log In
                </AnimatedButton>
            )}
        </div>
    );
}

export default AuthButton;
