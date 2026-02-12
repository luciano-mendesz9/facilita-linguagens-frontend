export default function PopUp({ children, header, actionClose }: { children: React.ReactNode, header?: { title?: string, desc?: string }, actionClose: () => void }) {
    return (
        <div className="z-40 flex fixed top-0 left-0 w-full justify-center items-center h-full bg-black/60 hover:bg-black/70 transition-colors duration-200 cursor-pointer" onClick={() => actionClose()}>
            <div className="bg-white p-5 md:p-12 rounded-2xl w-[80%] max-w-220 h-[80%] max-h-250 cursor-default" onClick={(e) => e.stopPropagation()}>
                {header && (
                    <>
                        <h1 className="text-3xl font-semibold">{header?.title}</h1>
                        <span className="text-gray-700"><strong>Obs: </strong>{header?.desc}</span>
                    </>
                )}
                {children}
            </div>
        </div>
    )
}