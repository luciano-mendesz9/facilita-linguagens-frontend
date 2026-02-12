type StatusType = 'success' | 'error' | 'warning';

interface StatusBadgeProps {
    title: string;
    type?: StatusType;
    color?: string;
}

export default function StatusBadge({
    title,
    type,
    color,
}: StatusBadgeProps) {
    const typeStyles: Record<StatusType, string> = {
        success: 'border-green-500 text-green-500 bg-green-500/30',
        warning: 'border-orange-500 text-orange-500 bg-orange-500/30',
        error: 'border-red-500 text-red-500 bg-red-500/30',
    };

    if (color) {
        return (
            <span
                className="px-4 py-1 rounded-full text-sm font-medium border"
                style={{
                    color: color,
                    borderColor: color,
                    backgroundColor: `${color}4D`, // 30% de opacidade
                }}
            >
                {title.toUpperCase()}
            </span>
        );
    }

    if (type) {
        return (
            <span
                className={`px-4 py-1 rounded-full text-sm font-medium border ${typeStyles[type]}`}
            >
                {title.toUpperCase()}
            </span>
        );
    }

    return (
        <span className="px-4 py-1 rounded-full text-sm font-medium border border-blue-500 text-blue-500 bg-blue-500/30">
            {title.toUpperCase()}
        </span>
    );
}
