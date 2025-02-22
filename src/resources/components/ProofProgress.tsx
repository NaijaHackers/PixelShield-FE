interface ProofProgressProps {
    progress: number;
    statusText?: string;
}

const ProofProgress: React.FC<ProofProgressProps> = ({ progress, statusText = "Processing" }) => {
    const radius = 50;
    const strokeWidth = 6;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    // Calculate the position of the moving dot
    const angle = (progress / 100) * 360;
    const radians = (angle - 90) * (Math.PI / 180);
    const dotX = 60 + normalizedRadius * Math.cos(radians);
    const dotY = 60 + normalizedRadius * Math.sin(radians);

    return (
        <div className="flex flex-col items-center justify-center relative">
            <svg width="100%" height="100%" viewBox="0 0 120 120">
                {/* Define Gradient */}
                <defs>
                    <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                </defs>

                {/* Background Circle */}
                <circle
                    cx="60"
                    cy="60"
                    r={normalizedRadius}
                    stroke="#1E3A8A"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />

                {/* Gradient Progress Circle */}
                <circle
                    cx="60"
                    cy="60"
                    r={normalizedRadius}
                    stroke="url(#gradientStroke)"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                    className="transition-all duration-300 ease-in-out"
                />

                {/* Moving Dot */}
                <circle cx={dotX} cy={dotY} r="2.2" fill="white" />
            </svg>

            {/* Status Text */}
            <div className="absolute text-center">
                <p className="text-sm">{statusText}</p>
                <p className="text-[20.27px] font-bold text-sky-400">{progress}%</p>
            </div>
        </div>
    );
};

export default ProofProgress;