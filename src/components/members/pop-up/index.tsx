export default function PopUp({ children }: { children: React.ReactNode }) {
    return (
        <div className="z-40 flex fixed top-0 left-0 w-full justify-center items-center h-full bg-[#000000b4]">
            <div className="bg-white p-5 rounded-2xl w-[80%] max-w-200 h-[80%] max-h-250">
                {children}
            </div>
        </div>
    )
}