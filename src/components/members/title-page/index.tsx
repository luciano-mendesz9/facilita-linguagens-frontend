export default function TitlePageMember({ text, description }: { text: string, description?: string }) {
    return (
        <div>
            <h1 className="md:text-3xl text-[20px] font-semibold">{text}</h1>
            {description && <p className="text-gray-500 mt-3 md:text-[16px] text-[12px] md:max-w-190">{description}</p>}
        </div>
    )
}