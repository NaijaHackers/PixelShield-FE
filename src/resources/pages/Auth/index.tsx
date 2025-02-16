import AuthButton from "@components/AuthButton";
import GuestLayout from "@resources/layouts/Guest";

const AuthPage = () => {
    return (
        <GuestLayout>
            <div className="p-4">
                <h2>AUTH PAGE</h2>
                <div className="">
                    <AuthButton />
                </div>
            </div>
        </GuestLayout>
    );
}

export default AuthPage;
