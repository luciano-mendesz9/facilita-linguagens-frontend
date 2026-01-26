
type Props = {
    title: string,
    desc?: string
}

export default function HeaderTitleAdmin({ title, desc }: Props) {
    return (
        <div>
            <h1 className="text-white text-3xl font-semibold mb-1">{title}</h1>
            <span className="text-[#ffffffc7]">{desc}</span> <br /><br />
        </div>
    )
}