
type Props = {
    title: string;
    bgColor?: string;
    action?: () => void;
};
export default function Button({ title, bgColor, action }: Props) {
    return (
        <button onClick={action} className={`${bgColor ?? 'bg-blue-500'} text-white font-semibold  px-5 py-4 rounded-[10px]  ${!bgColor ? 'hover:bg-blue-600' : 'hover:opacity-80'}  cursor-pointer`}>
            {title.toUpperCase()}
        </button>
    );
}