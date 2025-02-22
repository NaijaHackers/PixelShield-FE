import React from "react";

type FlagBadgeType = "danger" | "safe" | "warning" | "info";

interface FlagBadgeProps {
    type: FlagBadgeType;
    text: string;
}

const FlagBadge: React.FC<FlagBadgeProps> = ({ type, text }) => {
    const getBackgroundColor = (type: FlagBadgeType) => {
        switch (type) {
            case "danger":
                return "bg-red-100";
            case "safe":
                return "bg-green-100";
            case "warning":
                return "bg-yellow-100";
            case "info":
                return "bg-blue-100";
            default:
                return "bg-gray-100";
        }
    };

    const getSvgForType = (type: FlagBadgeType) => {
        switch (type) {
            case "danger":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="red"
                        width="24px"
                        height="24px"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                );
            case "safe":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="green"
                        width="24px"
                        height="24px"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                );
            case "warning":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="orange"
                        width="24px"
                        height="24px"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                    </svg>
                );
            case "info":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="blue"
                        width="24px"
                        height="24px"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div
            className={`flex items-center p-3 rounded-lg ${getBackgroundColor(
                type
            )}`}
        >
            <div className="mr-3">{getSvgForType(type)}</div>
            {/* Custom Text */}
            <span className="text-sm font-medium">{text}</span>
        </div>
    );
};

export default FlagBadge;