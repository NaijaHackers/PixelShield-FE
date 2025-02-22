import { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <div className={`md:px-[99px] px-5 ${className}`}>
            {children}
        </div>
    );
}

export default Container;
