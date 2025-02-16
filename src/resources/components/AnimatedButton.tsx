import { ReactNode, FC, ButtonHTMLAttributes } from 'react';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    label?: ReactNode;
    loadingLabel?: string;
    transparent?: boolean;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({
    isLoading = false,
    label,
    loadingLabel = "Please Wait...",
    disabled,
    transparent = false,
    className = "",
    children,
    ...props
}) => {
    return (
        <button
            disabled={disabled || isLoading}
            className={`relative flex items-center flex-grow justify-center gap-2 font-semibold rounded-full 
                ${transparent
                    ? "bg-transparent p-0"
                    : `px-4 py-2 ${isLoading || disabled
                    ? "bg-gray-500 cursor-not-allowed text-sm"
                    : "bg-[#3f3cbb] hover:bg-zinc-700 cursor-pointer"
                    } text-white`
                }
                ${className}`}
            {...props}
        >
            {isLoading && (
                <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                </svg>
            )}
            <span className='h-5 flex items-center text-sm'>{isLoading ? loadingLabel : (children ?? label)}</span>
        </button>
    );
};

export default AnimatedButton;
