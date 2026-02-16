
type Props = {
    title: string;
    bgColor?: string;
    action?: () => void;
    styles?: string;
    disabled?: boolean;
};
export default function Button({ title, bgColor, action, styles, disabled = false }: Props) {
    return (
        <button
            disabled={disabled}
            onClick={action}
            style={disabled ? { backgroundColor: 'gray', cursor: 'not-allowed' } : {}}
            className={` ${bgColor ?? 'bg-blue-500'} text-white font-semibold  px-5 py-4 rounded-[10px] ${styles} ${!bgColor ? 'hover:bg-blue-600' : 'hover:opacity-80'}  cursor-pointer`}>
            {title.toUpperCase()}
        </button>
    );
}